import React from 'react';
import Relay from 'react-relay';
import Comment from './Comment';
import CreateCommentMutation from './CreateCommentMutation';

class Story extends React.Component {
    _handleSubmit = (e) => {
        e.preventDefault();
        Relay.Store.commitUpdate(
            new CreateCommentMutation({
                text: this.refs.newCommentInput.value,
                story: this.props.story
            })
        );
        this.refs.newCommentInput.value = '';
    }

    render() {
        var {comments} = this.props.story;
        console.log(comments[0])
        return (
            <form onSubmit={this._handleSubmit}>
                <h1>Breaking News</h1>
                <h4>The peanut is neither a pea nor a nut.</h4>
                <strong>Discuss:</strong>
                <ul>
                    {comments.map(
                        (comment,index) => <Comment key={index} comment={comment}/>
                    )}
                </ul>
                <input
                    placeholder="Enter Something;"
                    ref="newCommentInput"
                    type="text"
                />
            </form>
        );
    }
}
export default Relay.createContainer(Story, {
    fragments: {
        story: () => Relay.QL`fragment on Story {
            comments {
                id
                text
            },
            id
        }
        `,
    },
});