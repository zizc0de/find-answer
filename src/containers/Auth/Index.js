import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_style.scss';

class AuthLayout extends Component {
	render() {
		return (
			<div className="container-fluid" style={{ backgroundColor: '#fff', height: '100vh' }}>
				<div className="row">
					<div className="col-lg-4 col-md-5 auth-container">
						<div className="auth-content">
							{this.props.children}
						</div>
					</div>
					<div className="col-lg-8 col-md-7 d-none d-md-flex bg-gradient auth-container">
						<div className="auth-content">
							
							<div className="row">
								<div className="col-12 text-center">
									<img src={require('assets/images/logo/logo_white.png')} className="img-fluid" />
								</div>
							</div>

							<div className="row" style={{marginTop: 80}}>
								<div className="col-12 text-center">
									<h2 className="text-white">Find your answer here!</h2>
									<p className="text-white font-18">Interactive discussion platform to answer your questions.</p>
								</div>
							</div>

							<div className="row mt-3">
								<div className="col-12 text-center">
									<Link to="/" className="btn btn-md btn-rounded btn-outline-transparent">Learn More</Link>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AuthLayout;