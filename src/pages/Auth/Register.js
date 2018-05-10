import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout as Layout } from 'containers';

class Register extends Component {
	render() {
		return (
			<Layout>
				<div className="row">
					<div className="col-12 text-center">
						<h5 className="text-semiBold">Register your account!</h5>
						<p className="font-14">Enter your details below.</p>
					</div>
				</div>
				<div className="row mt-5">
					<div className="col-12">
						<form>
							<div className="form-group">
								<label>Email Address</label>
								<input type="text" className="form-control form-control-lg" />
							</div>
							<div className="form-group">
								<label>Your Name</label>
								<input type="text" className="form-control form-control-lg" />
							</div>							
							<div className="form-group">
								<label>Password</label>
								<input type="password" className="form-control form-control-lg" />
							</div>
							<div className="form-group mt-5">
								<button type="button" className="btn btn-lg btn-rounded btn-block btn-base">REGISTER</button>
							</div>
						</form>
					</div>
				</div>
				<div className="row mt-2">
					<div className="col-12 text-center">
						<p>Already have an account? <Link to="/login" className="text-bold color-primary to-primary-dark">Sign In</Link></p>
					</div>
				</div>
			</Layout>
		);
	}
}

export default Register;