import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

import routes from './routes';
import withAuthentication from 'components/Session/withAuthentication';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<div>
						<Helmet>
							<link rel="apple-touch-icon" sizes="57x57" href={require('assets/images/favicons/apple-icon-57x57.png')} />
							<link rel="apple-touch-icon" sizes="60x60" href={require('assets/images/favicons/apple-icon-60x60.png')} />
							<link rel="apple-touch-icon" sizes="72x72" href={require('assets/images/favicons/apple-icon-72x72.png')} />
							<link rel="apple-touch-icon" sizes="76x76" href={require('assets/images/favicons/apple-icon-76x76.png')} />
							<link rel="apple-touch-icon" sizes="114x114" href={require('assets/images/favicons/apple-icon-114x114.png')} />
							<link rel="apple-touch-icon" sizes="120x120" href={require('assets/images/favicons/apple-icon-120x120.png')} />
							<link rel="apple-touch-icon" sizes="144x144" href={require('assets/images/favicons/apple-icon-144x144.png')} />
							<link rel="apple-touch-icon" sizes="152x152" href={require('assets/images/favicons/apple-icon-152x152.png')} />
							<link rel="apple-touch-icon" sizes="180x180" href={require('assets/images/favicons/apple-icon-180x180.png')} />
							<link rel="icon" type="image/png" sizes="192x192" href={require('assets/images/favicons/android-icon-192x192.png')} />
							<link rel="icon" type="image/png" sizes="32x32" href={require('assets/images/favicons/favicon-32x32.png')} />
							<link rel="icon" type="image/png" sizes="192x192" href={require('assets/images/favicons/android-icon-192x192.png')} />
							<link rel="icon" type="image/png" sizes="32x32" href={require('assets/images/favicons/favicon-32x32.png')} />
							<link rel="icon" type="image/png" sizes="96x96" href={require('assets/images/favicons/favicon-96x96.png')} />
							<link rel="icon" type="image/png" sizes="16x16" href={require('assets/images/favicons/favicon-16x16.png')} />
						</Helmet>
						{renderRoutes(routes)}
					</div>
				</Switch>
			</Router>
			)
	}
};

export default withAuthentication(App);