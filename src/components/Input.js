import React from 'react';

class Input extends React.Component{

	constructor(props){
		super(props)
	}

    handleOnChange(e){
        this.props.onChange(e);
    }

	render(){
        //console.info(`[Input] props ${JSON.stringify(this.props)}`)
		return <input
            onChange={this.handleOnChange.bind(this)}
            type={this.props.inputType}
            className={this.props.className}>
		</input>
	}
}

export default Input;