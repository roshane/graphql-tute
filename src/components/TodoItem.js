import React from 'react';
import IconButton from './IconButton';
import Label from './Label';
import Input from './Input';
import ListItem from './ListItem';
import Span from './Span';

class TodoItem extends React.Component{
	

    static defaultProps={
        className: "item-blue clearfix",
        label: {
            className: "inline",
            input: {
                inputType: "checkbox"
            },
            span: {
                className: 'lbl',
                data: 'Sample todo item'
            }
        },
        div: {
            className: "inline pull-right position-relative",
            iconButton: {
                button: {
                    className: "btn btn-minier bigger btn-danger",
                    icon: {
                        className: "icon-trash icon-only bigger-120"
                    }
                }
            }
        }
    };

	constructor(props){
		super()
	}

    handleTodoItemDelete(e){
        console.log(`[TodoItem] todoItem delete ${e}`);
    }

    handleTodoItemComplete(e) {
        console.log(`[TodoItem] todoItem complete ${e}`);
    }

	render(){
		//console.log(`[TodoItem] props ${JSON.stringify(this.props)}`);

        return <ListItem className={this.props.className}>
                <Label className={this.props.label.className}>
                    <Input inputType={this.props.label.input.inputType}
                           onChange={this.handleTodoItemComplete.bind(this)}/>
                    <Span className={this.props.label.span.className}
                          data={this.props.label.span.data}/>
                </Label>
            <div className={this.props.div.className}>
                <IconButton btnClassName={this.props.div.iconButton.button.className}
                            onClick={this.handleTodoItemDelete.bind(this)}
                            iconClassName={this.props.div.iconButton.button.icon.className}/>
            </div>
            </ListItem>

	}

}
export default TodoItem;