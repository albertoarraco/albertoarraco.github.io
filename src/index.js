import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import DevTools from './containers/DevTools';/*
import styled from 'styled-components';
import * as Sentry from '@sentry/browser';*/
import {version} from '../package.json';
import App from "./components/app";
import Router from "./containers/router";

const store = configureStore();

const rootElement = document.getElementById("root");
const develop = process.env.NODE_ENV === 'development';
/*
if(develop) {
	Sentry.init({ dsn: 'https://f6d8c2af783442e684cf790e4d0336e5@sentry.io/1356081' });
} else {
	try {
		Sentry.init({
			dsn: "https://5cbaa9ff917b407e908648eda215e8f8@sentry.io/1401798",
			release: "v" + version
		});
	} catch(e) {
		Sentry.captureException(e);
	}
}*/

render(
		<Provider store={store}>
			<Router/>
			{develop && <DevTools />}
		</Provider>,
		rootElement
);
