import 'babel/polyfill'

import React from 'react';
import { render } from 'react-dom';
import Relay from 'react-relay';


import Route from './route/Route';
import TodoListView from './TodoListView';

const container = document.getElementById('root');

const loadingFunc=()=>{
    return <div>
        Loading.........
    </div>
};

render(<Relay.RootContainer
        Component={TodoListView}
        route={new Route()}
        renderLoading={loadingFunc}/>
, container);