var db = require('./db');
var graphql = require('graphql');

const TodoItemType = new graphql.GraphQLObjectType({

    name: "TodoItem",
    description: "This is the entity representation of Todo Item",
    fields: ()=> {
        return {
            id: {
                type: graphql.GraphQLString,
                resolve: (todoItem)=>todoItem.id
            },
            item: {
                type: graphql.GraphQLString,
                resolve: (todoItem)=> todoItem.item
            },
            completed: {
                type: graphql.GraphQLBoolean,
                resolve: (todoItem)=> todoItem.completed
            }
        }
    }
});

const AssetType = new graphql.GraphQLObjectType({
    name: "Asset",
    description: "Application assets",
    fields: ()=> {
        return {
            todos: {
                type: new graphql.GraphQLList(TodoItemType),
                resolve: (object)=>object.assets
            }
        }
    }

});

const MutationInputType = new graphql.GraphQLInputObjectType({
    name: "MutationInput",
    description: "Mutation Input type arguments object",
    fields: ()=> {
        return {
            clientMutationId: {
                type: graphql.GraphQLString
            },
            item: {
                type: graphql.GraphQLString
            },
            completed: {
                type: graphql.GraphQLBoolean
            }
        }
    }

});

const RootQuery = new graphql.GraphQLObjectType({
    name: "RootQuery",
    description: "This is the Root Query of Todo Application Graph API",
    fields: ()=> {
        return {
            assets: {
                type: AssetType,
                args: {
                    id: {
                        type: graphql.GraphQLInt
                    },
                    completed: {
                        type: graphql.GraphQLBoolean
                    }
                },
                resolve: (_, args)=> {
                    console.log("resolving todos")
                    return {assets: db.models.todo.findAll({where: args})};
                }
            }
        }
    }
});

const Mutation = new graphql.GraphQLObjectType({
    name: "Mutation",
    description: 'Add todo items',
    fields: ()=> {
        return {
            addTodo: {
                type: TodoItemType,
                args: {
                    input: {
                        type: new graphql.GraphQLNonNull(MutationInputType)
                    }
                },
                resolve: (_, args)=> {
                    return db.models.todo.create({
                        item: args.input.item,
                        completed: args.input.completed
                    });
                }
            }
        }
    }
});

const schema = new graphql.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
module.exports = schema;
