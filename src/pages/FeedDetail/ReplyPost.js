import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { db } from 'utils/firebase';

const byPropKey = (propName, value) => () => ({
	[propName]: value
});

class ReplyPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			response: '',
			button: {
				text: 'Reply',
				disabled: false
			},
			error: null
		};
	}

	resetButton = () => {
		this.setState({
			button: {
				text: 'Reply',
				disabled: false
			}
		});	
	}

	onSubmit = (event) => {
		event.preventDefault();

		const {
			authUser,
			questionUid
		} = this.props;

		const {
			response
		} = this.state;

		let data = {
			userUid: authUser.uid,
			questionUid: questionUid,
			response: response
		}

		this.setState({
			button: {
				text: 'Loading...',
				disabled: true
			}
		});
		
		db.doCreateResponse(data.userUid, data.questionUid, data.response)
		.then(() => {
			this.setState(() => ({
				response: '',
			}));
			this.resetButton();			
		})
		.catch(error => {
			this.setState(byPropKey('error', error));
			this.resetButton();
		})
	}

	render() {
		const { authUser, questionUid } = this.props;
		const {
			response,
			button
		} = this.state;

		const isInvalid = response === '' || button.disabled;

		return (
			<div className="box box-shadow">
				<div className="row">
					<div className="col-12">
						<div className="d-flex" style={{ flexFlow: 'row', alignItems: 'center' }}>
							<img src={require('assets/images/profile.png')} className="rounded-circle" style={{ height: 40, width: 40, objectFit: 'cover' }} />
							<div className="d-flex ml-3">
								<p className="mb-0 text-semiBold">{authUser.detail.fullname}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-12">
						<form onSubmit={this.onSubmit}>
							<div className="form-group">
								<textarea
								className="form-control pl-0"
								placeholder="Write a response..."
								rows="4"
								style={{ border: 'none', resize: 'none' }}
								value={response}
								onChange={event => this.setState(byPropKey('response', event.target.value))}
								/>
							</div>
							<div className="form-group mt-4">
								<button type="submit" className="btn btn-md btn-rounded btn-outline-base mr-3" disabled={isInvalid}>{button.text}</button>
							</div>
							{/*<button className="btn btn-md btn-rounded btn-grey">Cancel</button>*/}
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default ReplyPost;