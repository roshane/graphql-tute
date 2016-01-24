import React from 'react';
import AddTodoComponent from './AddTodoComponent';
import TodoItem from './TodoItem';
import Relay from 'react-relay';

class TodoComponent extends React.Component {

    static defaultProps = {
        div: {
            className: "tab-pane active",
            id: "task-tab",
            h4: {
                className: "smaller blue",
                i: {
                    className: "icon-list",
                    data: ' TODO Lists'
                }
            }
        },
        ul: {
            className: "item-list ui-sortable",
            id: "tasks"
        }
    }

    constructor(props) {
        super(props)
    }

    render() {
        //console.info(`[TodoComponent] props ${JSON.stringify(this.props)}`);

        return <div>
            <hr/>
            <AddTodoComponent />
            <hr/>
            <div className={this.props.div.className} id={this.props.div.id}>
                <h4 className={this.props.div.h4.className}>
                    <i className={this.props.div.h4.i.className}></i>
                    {this.props.div.h4.i.data}
                </h4>
                <ul className={this.props.ul.className} id={this.props.ul.id}>
                    <TodoItem/>
                </ul>
            </div>
        </div>
    }
}

export default Relay.createContainer(TodoComponent, {
    fragments: {
        todos: () => Relay.QL`fragment on TodoItem{completed,item}`
    }
});