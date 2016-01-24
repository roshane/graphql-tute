import React from 'react'
import { render } from 'react-dom'
import TodoComponent from './components/TodoComponent';
import Relay from 'react-relay';
import Mutation from './Mutations';

class TodoListView extends React.Component {

    state = {
        item: 'Sample item',
        completed: true
    };

    constructor(props) {
        super(props)
    }

    handleCheckBoxCheck(e) {
        console.log(e.target.checked);
        this.setState({completed: e.target.checked})
    }

    handleAddTodo(e) {
        const newItem = {
            item: this.state.item,
            completed: this.state.completed
        };
        Relay.Store.commitUpdate(
            new Mutation({todo: newItem})
        );
        console.log(`Adding item ${JSON.stringify(newItem)}`);
    }

    handleInputChange(e) {
        this.setState({item: e.target.value});
    }

    render() {

        return <div className="row-fluid">
            <div className="span7">
                <table className="table">
                    <thead className="table-header">
                    <tr>
                        <td>Id</td>
                        <td>Todo Item</td>
                        <td>Completed</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.assets.todos.map((item)=> {
                        return <tr>
                            <td>{item.id}</td>
                            <td>{item.item}</td>
                            <td>
                                <input type="checkbox"
                                       className="input"
                                       checked={item.completed?'checked':''}
                                       onChange={this.handleCheckBoxCheck.bind(this)}/>
                            </td>
                        </tr>
                    })}
                    </tbody>
                </table>
            </div>
            <div className="span5">
                <div className="widget-box">
                    <div className="widget-header">
                        <h5>Add Todo Item</h5>
                    </div>
                    <div className="widget-body">
                        <div className="widget-main">
                            <form className="form-horizontal">
                                <div className="control-group">
                                    <label className="control-label">Item </label>
                                    <div className="controls">
                                        <input type="text"
                                               value={this.state.item}
                                               onChange={this.handleInputChange.bind(this)}/>
                                    </div>
                                </div>
                                <div className="control-group">
                                    <label className="control-label">Completed </label>
                                    <div className="controls">
                                        <input type="checkbox"
                                               checked={this.state.completed?'checked':false}
                                               onChange={this.handleCheckBoxCheck.bind(this)}/>
                                    </div>
                                </div>
                                <div className="">
                                    <button type="button" className="btn btn-info"
                                            onClick={this.handleAddTodo.bind(this)}>
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Relay.createContainer(TodoListView, {
    fragments: {
        assets: () => Relay.QL` fragment on Asset{
            todos{
                id
                completed
                item
            }
        }`
    }
});