import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReplyList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: this.props.response
		}
	}

	render() {
		const { response: detail } = this.props;

		return (
			<div className="box box-shadow mb-3">
				<div className="row">
					<div className="col-12">
						<img src={require('assets/images/profile.png')} className="rounded-circle float-left" style={{ height: 40, width: 40, objectFit: 'cover' }} />
						<div className="float-left ml-3">
							<p className="mb-0 text-semiBold">{detail.fullname}</p>
							<p className="font-12 color-grey">{detail.createdAt}</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 color-dark-grey">
						<p>{detail.response}</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ReplyList;
