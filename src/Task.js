import React from "react";
import Relay from "react-relay";

export default class Task extends React.Component {
    constructor() {
        super()
    }

    render() {
        let {id,text}=this.props.task;
        return <li key={id}>{text} - {id}</li>
    }
}

