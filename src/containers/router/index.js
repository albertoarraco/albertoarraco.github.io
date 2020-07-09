import React, {Component} from 'react';
import {
	HashRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";
import HomeApp from "../home";
import SpringAnimation from "../spring-animations";

export default class RouterComponent extends Component {
	render() {
		return  (<Router>
			<Switch>
				<Route exact path="/spring-animation/parallax-effect">
					<SpringAnimation />
				</Route>
				<Route path="/home">
					<HomeApp />
				</Route>
			</Switch>
		</Router>);
	}
}
