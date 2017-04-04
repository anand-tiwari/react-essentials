/*
const ReactDom = require('react-dom');
const React = require('react');
import ReactDom from 'react-dom';
*/

import React from 'react'
import { render } from 'react-dom'
import { SkiDayCount } from './components/SkiDayCount'

// sometimes react not defined error occurs to capture this event
window.React = React

render(
	<SkiDayCount />,
	document.getElementById('react-container')
)