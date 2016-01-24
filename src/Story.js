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
        return (
            <form onSubmit={this._handleSubmit}>
                <h1>Breaking News</h1>
                <p>The peanut is neither a pea nor a nut.</p>
                <strong>Discuss:</strong>
                <ul>
                    {comments.map(
                        (comment,index) => <Comment key={comment.id*index} comment={comment}/>
                    )}
                </ul>
                <input
                    placeholder="Weigh in&hellip;"
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