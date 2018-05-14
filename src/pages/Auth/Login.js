import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import { AuthLayout as Layout } from 'containers';

import { auth, firebase } from 'utils/firebase';

const byPropkey = (propName, value) => () => ({
	[propName]: value
});

const INITIAL_STATE = {
	email: '',
	password: '',
	button: {
		text: 'SIGN IN',
		disabled: false
	},
	error: null,
	render: false
}

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
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

		auth.userLogin(email, password)
		.then(() => {
			this.setState(() => ({ ...INITIAL_STATE }));
			history.push('/questions');
		})
		.catch(error => {
			this.setState(byPropkey('error', error));
			this.setState({
				button: {
					text: 'SIGN IN',
					disabled: false
				}
			});
		});
	}

	render() {
		const {
			email,
			password,
			error,
			render
		} = this.state;

		const isInvalid = email === '' || password === '' || this.state.button.disabled;

		return (
			<div>
				{render &&
					<Layout>
						<div className="row mb-5">
							<div className="col-12 text-center">
								<h5 className="text-semiBold">Sign in to FIND.answer</h5>
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
										onChange={event => this.setState(byPropkey('email', event.target.value))}
										/>
									</div>
									<div className="form-group">
										<label>Password</label>
										<input
										type="password"
										className="form-control form-control-lg"
										value={password}
										onChange={event => this.setState(byPropkey('password', event.target.value))}
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
								<p>Don't have an account? <Link to="/register" className="text-bold color-primary to-primary-dark">Register</Link></p>
							</div>
						</div>
					</Layout>
				}
			</div>
		);
	}
}

export default withRouter(Login);