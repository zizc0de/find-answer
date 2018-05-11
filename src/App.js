import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import routes from './routes';
import withAuthentication from 'components/Session/withAuthentication';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					{renderRoutes(routes)}
				</Switch>
			</Router>
			)
	}
};

export default withAuthentication(App);