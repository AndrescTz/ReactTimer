//This is when we are using modules and not add references on index.html
var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory, browserHistory} = require('react-router');
//-----------------------------------------------------------------------------------------------------

//Adding references to components
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');
//-----------------------------------------------------------------------------------------------------


//Load foundation
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//App css
require('style!css!sass!applicationStyles')
//-----------------------------------------------------------------------------------------------------

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="countdown" component={Countdown}/>
			<IndexRoute component={Timer}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
 
