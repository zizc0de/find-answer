import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-white fixed-top">
				<div className="container-fluid">
					<Link className="navbar-brand" to="/feed">PAPR.</Link>
					<div className="collapse navbar-collapse" id="navbarCollapse">					
						<ul className="navbar-nav ml-auto">
							<li className="nav-item mr-2">
								<Link className="nav-link" to="#">
									<i className="material-icons" style={{ marginTop: 2 }}>notifications_none</i>
								</Link>
							</li>
							<li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle non-caret" to="/profile" id="navbarDropdown">
									<img src={require('assets/images/profile.png')} className="img-fluid rounded-circle" style={{ height: 30, width: 30, objectFit: 'cover' }} />
									<div className="dropdown-menu">
										<a className="dropdown-item" to="#">Profile</a>
										<a className="dropdown-item" to="#">Sign Out</a>
									</div>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;