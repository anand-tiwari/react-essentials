/*
const ReactDom = require('react-dom');
const React = require('react');
import ReactDom from 'react-dom';
*/

import React from 'react'
import { render } from 'react-dom'
// import { SkiDayCount } from './components/SkiDayCount'
// import { SkiDayCount } from './components/SkiDayCount-createClass'
// import { SkiDayCount } from './components/SkiDayCount-ES6'
// import { SkiDayCount } from './components/SkiDayCount-ES6-Stateless'
// import { SkiDayList } from './components/SkiDayList'
// import { App } from './components/App'
import { App } from './components/App-ES6'


// sometimes react not defined error occurs to capture this event
window.React = React

/*render(
	<SkiDayList days={
		[
			{
				resort: "Squaw Valley",
				date: new Date("1/2/2017"),
				powder: true,
				backcountry: false
			},
			{
				resort: "kirkwood",
				date: new Date("3/28/2017"),
				powder: false,
				backcountry: false
			},
			{
				resort: "Mt. Tallac",
				date: new Date("4/2/2017"),
				powder: false,
				backcountry: true
			}
		]	
	} />,
	document.getElementById('react-container')
)*/

render(
	<App />,
	document.getElementById('react-container')
)

/* For default props */
/*render(
	<SkiDayCount/>,
	document.getElementById('react-container')
)*/

/*render(
	<SkiDayCount total={50}
					powder={20}
					backcountry={10}
					goal={100} />,
	document.getElementById('react-container')
)*/


