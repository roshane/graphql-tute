import React from 'react';

class IconButton extends React.Component{
	constructor(props){
		super(props)
	}

    onClick(e){
        console.log(`[IconButton] click ${e}`);
        this.props.onClick(e);
    }

	render(){
        return <button
            type="button"
            onClick={this.onClick.bind(this)}
            className={this.props.btnClassName}>
            {this.props.caption}
                <i className={this.props.iconClassName}></i>
            </button>
	}
}

export default IconButton;