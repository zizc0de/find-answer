import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/images/logo/logo.png';

import AuthUserContext from 'components/Session/AuthUserContext';

class Header extends Component {
	render() {
		return (
			<AuthUserContext.Consumer>
				{context =>			
					<nav className="navbar navbar-expand navbar-white fixed-top">
						<div className="container-fluid">
							<Link className="navbar-brand" to="/questions">
								<img src={logo} className="img-fluid" />
							</Link>
							<div className="collapse navbar-collapse" id="navbarCollapse">					
								<ul className="navbar-nav ml-auto">
									<li className="nav-item mr-2">
										<Link className="nav-link" to="#">
											<i className="material-icons" style={{ marginTop: 2 }}>notifications_none</i>
										</Link>
									</li>
									<li className="nav-item">
										<Link className="nav-link" to="/profile">
											<img src={require('assets/images/profile.png')} className="img-fluid rounded-circle" style={{ height: 30, width: 30, objectFit: 'cover' }} />
											<span className="ml-2">{ 'Hello ' + context.state.detail.fullname.split(' ').slice(-1).join(' ') + '!'}</span>
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</nav>
				}
			</AuthUserContext.Consumer>
		);
	}
}

export default Header;