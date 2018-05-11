import React from 'react';
import { withRouter } from 'react-router-dom';

import AuthUserContext from './AuthUserContext';
import { firebase } from 'utils/firebase';

const withAuthorization = (condition) => (Component) => {
	class WithAuthorization extends React.Component {
		componentDidMount() {
			firebase.auth.onAuthStateChanged(authUser => {
				if(!condition(authUser)) {
					this.props.history.push('/login');
				}
			});
		}

		render() {
			return (
				<AuthUserContext.Consumer>
					{authUser => authUser ? <Component /> : null}
				</AuthUserContext.Consumer>
			);
		}
	}

	return withRouter(WithAuthorization);
}

export default withAuthorization;