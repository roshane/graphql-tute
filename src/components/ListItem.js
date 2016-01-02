import React from 'react';

class ListItem extends React.Component{
	constructor(props){
		super(props)
		this.state={}
	}	

	render(){
        //console.log(`[ListItem] children ${(this.props.children)}`);

        return <li className={this.props.className}>
                {this.props.data}
            {this.props.children}
            </li>
    }
}

export default ListItem;