import React from 'react'
import { render } from 'react-dom'
import App from './App'

var props={
    addBtnIcon:'glyphicon glyphicon-plus',
    delBtnIcon:'glyphicon glyphicon-trash',
    addBtnCls:'btn btn-primary',
    delBtnCls:'btn btn-danger',
};

var application=React.createElement(App,props);

render(application, document.getElementById('root'))
