// const { render } = require('react-dom');
const ReactDOM = require('react-dom');
const React = require('react');

const style = {
	backgroundColor: 'orange',
	color: 'white',
	fontFamily: 'verdana'
}

ReactDOM.render(
	<h1 id="title"
		className = 'header'
		style={style} >
		Hello Anand !
	</h1>,
	document.getElementById('react-container')
)