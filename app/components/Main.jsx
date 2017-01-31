var React = require('react');
var {Route, Router, indexRoute, hashHistory} = require('react-router');
//-----------------------------------
//Components
var Nav = require('Nav');
//-----------------------------------

var Main = (props) => {
	return(
		<div>
			<div>
				<Nav/>
				<div>
					<p>Main.jsx Rendered</p>
					{props.children}
				</div>
			</div>
		</div>
	);
}

module.exports= Main;
