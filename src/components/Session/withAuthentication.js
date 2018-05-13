import React from 'react';

import AuthUserContext from './AuthUserContext';
import { db, firebase } from 'utils/firebase';

const withAuthentication = (Component) =>
	class WithAuthentication extends React.Component {
		constructor(props) {
			super(props);

			this.state = {
				authUser: null,
			};
		}

		getUserById = (userId) => {
			return new Promise(resolve => {
				db.usersRef().child(userId).on('value', user => {resolve(user.val())});
			});
		};

		fetch = (user) => {
			this.getUserById(user.uid)
			.then((detail) =>{
				let data = {
					detail,
					...user
				}
				this.setState({
					authUser: data
				})
			})
		}

		componentDidMount() {
			firebase.auth.onAuthStateChanged(authUser => {
				authUser
	          	? this.fetch(authUser)
	          	: this.setState(() => ({ authUser: null }));
			});
		}

		doUpdateUser = (fullname, headline) => {
			const { email } = this.state.authUser.detail

			this.setState(previousState => {		
				Object.assign(previousState.authUser, {
					detail: {
						email: email,
						fullname: fullname,
						headline: headline							
					}
				});
			});
		}

		render() {
			const { authUser } = this.state;

			return (
				<AuthUserContext.Provider value={{
					state: authUser,
					updateUser: this.doUpdateUser
				}}>
					<Component />
				</AuthUserContext.Provider>
			);
		}
	}

export default withAuthentication;