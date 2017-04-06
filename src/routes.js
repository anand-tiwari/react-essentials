import React from 'react';
import {Router, Route, browserHistory} from 'react-router';
import { App } from './components/App-ES6';
import { Whoops404 } from './components/Whoops404';

var routes = (
	<Router history={browserHistory} >
		<Route path="/" component = {App} />
		<Route path="*" component = {Whoops404} />
	</Router>
);
module.exports = routes;