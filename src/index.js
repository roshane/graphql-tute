import 'babel/polyfill'

import 'react-router-relay';
import React from 'react';
import { render } from 'react-dom';
import Relay from 'react-relay';
import Story from './Story';
import Route from './route/Route';

const mountNode = document.getElementById('root');


render(
    <Relay.RootContainer
        Component={Story}
        route={new Route()}

    />,
    mountNode
);