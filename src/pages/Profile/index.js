import React, { Component } from 'react';
import {ProfileLayout as Layout} from 'containers';

import withAuthorization from 'components/Session/withAuthorization';

import { db } from 'utils/firebase';

const byPropKey = (propName, value) => () => ({
	[propName]: value
});

const INITIAL_STATE = {
	fullname: '',
	headline: '',
	button: {
		text: 'Save',
		disabled: false
	},
	error: null
}

class Profile extends Component {
	constructor(props) {
		super(props);
		this.state = { ...INITIAL_STATE };
	}

	resetButton = () => {
		this.setState({
			button: {
				text: 'Save',
				disabled: false
			}
		});	
	}

	componentDidMount() {
		const { authUser } = this.props;
		this.setState({
			email: authUser.detail.email,
			fullname: authUser.detail.fullname,
			headline: authUser.detail.headline
		});
	}

	onSubmit = (event) => {
		event.preventDefault();

		const {
			fullname,
			headline
		} = this.state;

		const { updateUser, authUser } = this.props;

		this.setState({
			button: {
				text: 'Saving...',
				disabled: true
			}
		});

		db.doUpdateUser(authUser.uid, fullname, headline)
		.then(() => {
			this.setState(() => ({
				fullname,
				headline
			}));
			this.props.updateUser(fullname, headline);			
			this.resetButton();
		})
		.catch(error => {
			this.setState('error', byPropKey('error', error));
			this.resetButton();
		})

		// console.log(this.props.authUser.uid);
	}

	render() {
		const {
			email,
			fullname,
			headline,
			error
		} = this.state;

		const isInvalid = fullname === '' || headline === '' || this.state.button.disabled;

		return (
			<Layout>
				<div className="box">
					<div className="box-head">
						<h5 className="box-title">Profile Detail</h5>
					</div>
					<div className="box-body">

						<form onSubmit={this.onSubmit}>

							<div className="row">
								<div className="col-md-6">
									<div className="form-group">
										<label>Email</label>
										<input
										type="text"
										className="form-control form-control-md"
										disabled="disabled"
										value={email}
										/>
									</div>
								</div>
								<div className="col-md-6">
									<div className="form-group">
										<label>Fullname</label>
										<input
										type="text"
										className="form-control form-control-md"
										value={fullname}
										onChange={event => this.setState(byPropKey('fullname', event.target.value))}
										/>
									</div>									
								</div>
							</div>

							<div className="form-group">
								<label>Headline</label>
								<input
								type="text"
								className="form-control form-control-md"
								value={headline}
								onChange={event => this.setState(byPropKey('headline', event.target.value))}
								/>
							</div>

							<div className="form-group mt-4 mb-0 text-right">
								<button type="submit" className="btn btn-md btn-rounded btn-base" disabled={isInvalid}>{this.state.button.text}</button>
							</div>

						</form>

					</div>
				</div>
			</Layout>
		);
	}
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Profile);