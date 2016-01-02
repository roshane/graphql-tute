import React from 'react';

class Label extends React.Component{
	constructor(props){
		super(props)
	}	

	render(){
        //console.log(`[Label] props ${JSON.stringify(this.props.className)}`)
        return <label
            className={this.props.className}>
                {this.props.data}
                {this.props.children}
            </label>
	}
}

export default Label;