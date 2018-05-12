import React, { Component } from 'react';

import { db } from 'utils/firebase';

const byPropKey = (propName, value) => () => ({
	[propName]: value
});

class FeedPost extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userUid: this.props.userUid,
			title: '',
			detail: '',
			button: {
				text: 'Share',
				disabled: false
			},
			error: null
		};
	}

	resetButton = () => {
		this.setState({
			button: {
				text: 'Share',
				disabled: false
			}
		});	
	}

	onSubmit = (event) => {
		event.preventDefault();

		const {
			userUid,
			title,
			detail
		} = this.state;

		this.setState({
			button: {
				text: 'Loading...',
				disabled: true
			}
		});

		db.doCreateQuestion(userUid, title, detail)
		.then(() => {
			this.setState(() => ({
				title: '',
				detail: ''	
			}));
			if(typeof this.props.getData === 'function') {
				this.props.getData();
			}
			this.resetButton();
		})
		.catch(error => {
			this.setState(byPropKey('error', error));
			this.resetButton();			
		});

	}

	render() {
		const {
			title,
			detail
		} = this.state;

		const isInvalid = title === '' || detail === '' || this.state.button.disabled;

		return (
			<div className="box box-shadow mb-3">
				<form onSubmit={this.onSubmit}>
					<div className="form-group">
						<input
						type="text"
						className="form-control pl-0 pt-0 text-semiBold"
						placeholder="Title your question"
						style={{ resize: 'none', border: 'none', fontSize: '1.25rem', marginBottom: 15 }}
						value={title}
						onChange={event => this.setState(byPropKey('title', event.target.value))}
						/>
					</div>
					<div className="form-group">
						<textarea
						className="form-control pl-0 pt-0"					
						placeholder="Detail your question"
						rows="4"
						style={{ resize: 'none', border: 'none' }}
						value={detail}
						onChange={event => this.setState(byPropKey('detail', event.target.value))}
						/>
					</div>
					<div className="form-group text-right mt-3 mb-0">
						<button type="submit" className="btn btn-base btn-rounded btn-shadow" disabled={isInvalid}>{this.state.button.text}</button>
					</div>
				</form>
			</div>
		);
	}
}

export default FeedPost;