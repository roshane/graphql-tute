import 'babel/polyfill'

import React from 'react';
import { render } from 'react-dom';
import Relay from 'react-relay';


import Route from './route/Route';
import TodoListView from './TaskList';

const container = document.getElementById('root');

const loadingFunc = ()=> {
    return <div className="container-fluid">
        <h3 className="text-center">Loading.........</h3>
    </div>
};

render(<Relay.RootContainer
        Component={TodoListView}
        route={new Route()}
        renderLoading={loadingFunc}/>
    , container);