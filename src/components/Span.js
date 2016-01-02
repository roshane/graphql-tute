import React from 'react';

class Span extends React.Component{
	constructor(){
		super()
	}

	render(){
        //console.log(`[Span] props ${JSON.stringify(this.props)}`);
        return <span
            className={this.props.className}>
            {this.props.data}
                {this.props.children}
            </span>
	}
}

export default Span;