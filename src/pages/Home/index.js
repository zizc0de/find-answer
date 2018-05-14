import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from 'assets/images/logo/logo.png';

import './_style.scss';

class Home extends Component {
	render() {
		return (
			<div>
				<nav className="navbar fixed-top" style={{ minHeight: 85 }}>
					<div className="container">
						<div className="navbar-brand">
							<img src={logo} className="img-fluid" style={{ height: 35}} />
						</div>
					</div>
				</nav>
				<div class="bg-home">
					<div className="container h-100">
						<div className="row h-100">
							<div className="col-lg-6 col-md-7" style={{flexDirection: 'column', alignSelf: 'center' }}>
								<h1 className="color-primary text-semiBold">Simple, Efficient, <br/> Seamless</h1>
								<p className="color-grey mt-4">Interactive discussion platform to answer your questions. In this platform you can ask a question and also start a discussion on a topic to get answers and opinions from various people.</p>
								<Link to="/register" className="btn btn-lg btn-outline-base btn-rounded mt-2">Get Started</Link>
							</div>
							<div className="col-lg-6 col-md-5 text-center d-none d-md-block" style={{ flexDirection: 'column', alignSelf: 'center' }}>
								<img src={require('assets/images/discuss_illustration.png')} className="img-fluid img-figure" style={{ maxHeight: 480 }} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;