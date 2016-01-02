import React from 'react';
import Input from './Input';
import IconButton from './IconButton';

class AddTodoComponent extends React.Component {

    static defaultProps = {
        className: 'form-search',
        input: {
            className: 'input-large span11',
            type: 'text'
        },
        iconButton: {
            button: {
                className: 'btn btn-purple btn-small',
                caption: 'Add Item'
            },
            icon: {
                className: 'icon-plus-sign icon-on-right bigger-110'
            }
        }
    };

    state = {
        todoItem: null
    };

    constructor(props) {
        super(props)
    }

    handleInputChange(e) {
        let value = e.target.value;
        this.setState({
            todoItem: value
        });
    }

    handleTodoItemAdd(e) {
        console.log(`[AddTodoComponent] new todo : ${this.state.todoItem}`);
    }

    render() {
        //console.log(`[AddTodoComponent] state ${this.state.todoItem}`);

        return <div className={this.props.className}>
            <Input inputType={this.props.input.type} className={this.props.input.className}
                   onChange={this.handleInputChange.bind(this)}/>
            &nbsp;
            <IconButton btnClassName={this.props.iconButton.button.className}
                        iconClassName={this.props.iconButton.icon.className}
                        onClick={this.handleTodoItemAdd.bind(this)}
                        caption={this.props.iconButton.button.caption}/>
        </div>
    }
}
export default AddTodoComponent;