import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_style.scss';

class ProfileSidebar extends Component {
	render() {
		return (
			<div className="profile-sidebar">
				<div className="profile-sidebar__head">
					<div className="valign-center">
						<div className="profile-image">
							<img src={require('assets/images/profile.png')} className="img-fluid rounded-circle" />
						</div>
						<div className="profile-info">
							<h5 className="text-white mb-0">Abdul Aziz</h5>
							<small className="text-white">zizcode.exporadev@gmail.com</small>
						</div>
					</div>
				</div>
				<div className="profile-sidebar__menu">
					<ul>
						<li className="active">
							<Link to="/profile"><i className="material-icons">account_box</i> Profile</Link>
						</li>
						<li>
							<Link to="/profile/feed"><i className="material-icons">rss_feed</i> My Feed</Link>
						</li>
						<li>
							<Link to=""><i className="material-icons">power_settings_new</i> Sign Out</Link>
						</li>
					</ul>
				</div>
			</div>
		);
	}
}

export default ProfileSidebar;