import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import nl2br from 'react-nl2br';

import { db } from 'utils/firebase';

class ReplyList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: this.props.response
		}
	}

	solved = (event) => {
		event.preventDefault();

		const { detail } = this.state;

		const {
		question,
		} = this.props;

		db.questionSolved(detail.key)
		.then(() => {
			db.doUpdateQuestionStatus(question.key, 'solved').then(() => {
				if(typeof fetch === 'function'){
					this.props.getData();
				}
			})
		})
	}

	render() {
		const { response: detail, question } = this.props;

		return (
			<div className="box box-shadow mb-3">
				<div className="row">
					<div className="col-md-9 col-sm-6">
						<img src={require('assets/images/profile.png')} className="rounded-circle float-left" style={{ height: 40, width: 40, objectFit: 'cover' }} />
						<div className="float-left ml-3">
							<p className="mb-0 text-semiBold">{detail.fullname}</p>
							<p className="font-12 color-grey">{detail.createdAt}</p>
						</div>
					</div>
					<div className="col-md-3 col-sm-6 text-left text-sm-right">
					{detail.accepted ?
						<p className="color-primary mb-0">
							<i className="material-icons">grade</i> Solved by this
						</p>
						: question.status == 'unsolved' ?
						<button type="button" className="btn btn-md btn-base" onClick={this.solved}>Solved by this ?</button>
						: ''
					}
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-12 color-dark-grey">
						<p className="mb-0">{nl2br(detail.response)}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ReplyList;
