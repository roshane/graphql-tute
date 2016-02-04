import React from 'react'
import { render } from 'react-dom'
import Relay from 'react-relay';
import Task from './Task';
import AddTaskMutation from './AddTaskMutation';

class TaskList extends React.Component {

    constructor(props) {
        super(props)
    }

    _handleFormSubmit(e) {
        e.preventDefault();
        let text = this.refs.newTaskText.value;
        Relay.Store.commitUpdate(new AddTaskMutation({
            text: text,
            asset:this.props.asset
        }));
        this.refs.newTaskText.value='';
        console.log(`adding new task [${text}]`);
    }

    render() {
        console.log(this.props.asset);
        let {id,tasks}=this.props.asset;
        console.log(`rendered asset id ${id}`);
        return <div>
            <h3>My Task List</h3>
            <ul className="item-list">
                {tasks.map((task, index)=> <Task key={index*121} task={task}/>)}
            </ul>
            <form onSubmit={this._handleFormSubmit.bind(this)}>
                <input type="text" ref="newTaskText"/>
            </form>
        </div>

    }
}

export default Relay.createContainer(TaskList, {
    fragments: {
        asset: () => Relay.QL` fragment on Asset{
            id
            tasks{
                id
                text
            }
        }`
    }
});