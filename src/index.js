/*
const ReactDom = require('react-dom');
const React = require('react');
import ReactDom from 'react-dom';
*/

import React from 'react'
import { render } from 'react-dom'
import { goodbye, hello } from './lib'

render(
	<div>
		{hello}
		{goodbye}
	</div>,
	document.getElementById('react-container')
)