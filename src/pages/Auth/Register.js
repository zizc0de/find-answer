import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { AuthLayout as Layout } from 'containers';

import { auth, db, firebase } from 'utils/firebase';

const byPropKey = (propName, value) => () => ({
	[propName]: value
});

const INITIAL_STATE = {
	fullname: '',
	email: '',
	password: '',
	button: {
		text: 'REGISTER',
		disabled: false
	},
	error: null,
	render: false	
};

class Register extends Component {	
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE};
	}	

	componentDidMount() {
		firebase.auth.onAuthStateChanged(user => {
			if (user) {
				this.props.history.push('/questions');
			}else{
				this.setState({
					render: true
				})
			}
		});
	}

	onSubmit = (event) => {
		event.preventDefault();
		
		const {
			fullname,
			email,
			password
		} = this.state;

		const {
			history
		} = this.props;

		this.setState({
			button: {
				text: 'LOADING...',
				disabled: true
			}
		});

		auth.userCreate(email, password)
		.then(authUser => {
			db.doCreateUser(authUser.user.uid, fullname, email)
			.then(() => {
				this.setState(() => ({ ...INITIAL_STATE }));
				history.push('/questions');
			})
			.catch(error => {
				this.setState(byPropKey('error', error));
			})
		})
		.catch(error => {
			this.setState(byPropKey('error', error));
			this.setState({
				button: {
					text: 'REGISTER',
					disabled: false
				}
			});			
		});
	}

	render() {
		const {
			fullname,
			email,
			password,
			error,
			render
		} = this.state;

		const isInvalid = fullname === '' || email === '' || password === '' || this.state.button.disabled;

		return (
			<div>
				{render &&
					<Layout>
						<div className="row mb-5">
							<div className="col-12 text-center">
								<h5 className="text-semiBold">Register your account!</h5>
								<p className="font-14">Enter your details below.</p>
							</div>
						</div>
						{
							error &&
							<div className="row">
								<div className="col-12">
									<div className="alert alert-danger">
										{ error && <p className="mb-0">{error.message}</p> }						
									</div>
								</div>
							</div>
						}
						<div className="row">
							<div className="col-12">
								<form onSubmit={this.onSubmit}>
									<div className="form-group">
										<label>Email Address</label>
										<input
										type="text"
										className="form-control form-control-lg"
										value={email}
										onChange={event => this.setState(byPropKey('email', event.target.value))}
										/>
									</div>
									<div className="form-group">
										<label>Your Name</label>
										<input
										type="text"
										className="form-control form-control-lg"
										value={fullname}
										onChange={event => this.setState(byPropKey('fullname', event.target.value))}
										/>
									</div>							
									<div className="form-group">
										<label>Password</label>
										<input
										type="password"
										className="form-control form-control-lg"
										value={password}
										onChange={event => this.setState(byPropKey('password', event.target.value))}
										/>
									</div>
									<div className="form-group mt-5">
										<button type="submit" className="btn btn-lg btn-rounded btn-block btn-base" disabled={isInvalid}>{this.state.button.text}</button>
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
				}
			</div>
			);
	}
}

export default withRouter(Register);