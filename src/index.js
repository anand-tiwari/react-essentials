import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './components/App-ES6';


// import routes from './routes';
import createBrowserHistory from 'history/createBrowserHistory';

import {
  browserHistory,
  Router,
  Route,
  Link
} from 'react-router';

import { Whoops404 } from './components/Whoops404';

import  configureStore from './store/configureStore';

const store = configureStore();

window.React = React

/*render(
	<App />,
	document.getElementById('react-container')
)
*/

render(
	<Provider store={store}>
	 <Router history={browserHistory} >
	    <div>
	      <ul>
	        <li><Link to="/">Home</Link></li>
	        <li><Link to="/about">About</Link></li>
	        <li><Link to="/topics">Topics</Link></li>
	      </ul>

	      <hr/>

	      <Route exact path="/" component={App}/>
	      <Route path="/about" component={App}/>
	      <Route path="/topics" component={App}/>
	    </div>
	  </Router>
	  </Provider>,
		document.getElementById('react-container')
);

