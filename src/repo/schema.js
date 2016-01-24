var graphql = require('graphql');
var relay = require('graphql-relay');

const STORY = {
    comments: [{id:1,text:'sample comment'}],
    id:1
};

var CommentType = new graphql.GraphQLObjectType({
    name: 'Comment',
    fields: () => ({
        id: {type: graphql.GraphQLID},
        text: {type: graphql.GraphQLString},
    }),
});

var StoryType = new graphql.GraphQLObjectType({
    name: 'Story',
    fields: () => ({
        comments: {type: new graphql.GraphQLList(CommentType)},
        id: {type: graphql.GraphQLString}
    }),
});

var CreateCommentMutation = relay.mutationWithClientMutationId({
    name: 'CreateComment',
    inputFields: {
        text: {
            type: new graphql.GraphQLNonNull(graphql.GraphQLString)
        },
    },
    outputFields: {
        story: {
            type: StoryType,
            resolve: () => {
                console.log('CreateCommentMutation -> outputFields');
                return STORY;
            },
        },
    },
    mutateAndGetPayload: (object) => {
        var newComment = {
            id: STORY.comments.length,
            text: object.text,
        };
        STORY.comments.push(newComment);
        console.log(`mutateAndGetPayload [${JSON.stringify(newComment)}]`);
        return newComment;
    },
});

var Schema = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: () => ({
            story: {
                type: StoryType,
                resolve: () => STORY,
            },
        }),
    }),
    mutation: new graphql.GraphQLObjectType({
        name: 'Mutation',
        fields: () => ({
            createComment: CreateCommentMutation,
        }),
    }),
});

module.exports = Schema;