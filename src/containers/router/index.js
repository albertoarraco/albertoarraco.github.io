import React, {Component} from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import HomeApp from "../home";
import SpringAnimation from "../spring-animations";

export default class Router extends Component {
	render() {
		return  (<Router>
			<Switch>
				<Route path="/spring-animation/test">
					<SpringAnimation />
				</Route>
				<Route path="/">
					<HomeApp />
				</Route>
			</Switch>
		</Router>);
	}
}
