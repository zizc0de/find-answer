import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { auth } from 'utils/firebase';

import './_style.scss';

class ProfileSidebar extends Component {

	signOut = (event) => {
		event.preventDefault();

		const {
			history
		} = this.props;

		const logout = auth.userLogout();
		
		if (logout) {			
			history.push('/');
		}
	}

	render() {
		const { authUser } = this.props;
		const { pathname } = this.props.location;

		return (
			<div className="profile-sidebar">
				<div className="profile-sidebar__head">
					<div className="valign-center">
						<div className="profile-image">
							<img src={require('assets/images/profile.png')} className="img-fluid rounded-circle" />
						</div>
						<div className="profile-info">
							<h5 className="text-white mb-0">{authUser.detail.fullname}</h5>
							<small className="text-white">{authUser.detail.email}</small>
						</div>
					</div>
				</div>
				<div className="profile-sidebar__menu">
					<ul>
						<li className={pathname == '/profile' ? 'active' : ''}>
							<Link to="/profile"><i className="material-icons">account_box</i> Profile</Link>
						</li>
						<li className={pathname == '/profile/questions' ? 'active' : ''}>
							<Link to="/profile/questions"><i className="material-icons">question_answer</i> My Questions</Link>
						</li>
						<li>
							<Link to="" onClick={this.signOut}><i className="material-icons">power_settings_new</i> Sign Out</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default withRouter(ProfileSidebar);
