var graphql = require('graphql');
var relay = require('graphql-relay');

const TASKS = {
    taskList: [{
        id: 1,
        text: "Sample Task"
    }],
    id: 1
};

const TaskType = new graphql.GraphQLObjectType({
    name: "Task",
    description: "Task",
    fields: ()=> {
        return {
            text: {
                type: graphql.GraphQLString,
                resolve: (task)=>task.text
            },
            id: {
                type: graphql.GraphQLString,
                resolve: (task)=>task.id
            }
        }
    }
});


const AssetType = new graphql.GraphQLObjectType({
    name: "Asset",
    description: "Asset",
    fields: ()=> {
        return {
            tasks: {
                type: new graphql.GraphQLList(TaskType),
                resolve: (result)=>result.taskList
            },
            id: {
                type: new graphql.GraphQLNonNull(graphql.GraphQLString),
                resolve: (result)=>result.id
            }
        }
    }
});

const AddTaskMutation = relay.mutationWithClientMutationId({
    name: "AddTaskMutation",
    inputFields: {
        text: {
            type: graphql.GraphQLString
        }
    },
    outputFields: {
        asset: {
            type: AssetType,
            resolve: ()=> {
                var index = TASKS.taskList.length - 1;
                console.log(`returning new task ${JSON.stringify(TASKS.taskList[index])}`)
                return TASKS;
            }
        }
    },
    mutateAndGetPayload: ({text}) => {
        var newTask = {
            id: TASKS.taskList.length + 1,
            text: text
        };
        TASKS.taskList.push(newTask);
        console.info(`mutateAndGetPayload -> [${JSON.stringify(newTask)}]`);
        return newTask
    }
});


const Mutations = new graphql.GraphQLObjectType({
    name: "Mutations",
    fields: ()=> {
        return {
            addTask: AddTaskMutation
        }
    }
});

const RootQuery = new graphql.GraphQLObjectType({
    name: "Query",
    description: "Query",
    fields: ()=> {
        return {
            asset: {
                type: AssetType,
                resolve: ()=> TASKS
            }
        }
    }
});

const Schema = new graphql.GraphQLSchema({
    query: RootQuery,
    mutation: Mutations
});

module.exports = Schema;