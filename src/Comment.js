import React from 'react';
import Relay from 'react-relay';

class Comment extends React.Component {
    render() {
        var {id, text} = this.props.comment;
        return <li key={id}>{text}</li>;
    }
}
export default Relay.createContainer(Comment, {
    fragments: {
        comment: () => Relay.QL`
            fragment on Comment {
                id,
                text,
            }
        `,
    },
});