import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { App } from './components/App-ES6';
// import routes from './routes';


import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import { Whoops404 } from './components/Whoops404';

window.React = React

/*render(
	<App />,
	document.getElementById('react-container')
)
*/

render(
	<Provider>
	 <Router>
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

