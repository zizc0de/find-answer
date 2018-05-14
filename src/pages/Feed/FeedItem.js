import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './_style.scss';

class FeedItem extends Component {
	constructor(props) {
		super(props)
		this.state = {
			detail: this.props.questions
		}
	}

	render() {
		const { questions: detail } = this.props;

		return (
			<div className="feed mb-3">
				<Link to={`/question/${detail.key}`} className="to-primary">
					<h5 className="feed__title">{detail.title}</h5>
				</Link>
				<div className="feed__content">
					<p>
						{ detail.detail.substring(0, 250) + "..." }
					</p>
				</div>
				<div className="row mt-4">
					<div className="col-md-8 mb-3 mb-md-0">
						<img src={require('assets/images/profile.png')} className="img-fluid rounded-circle author-image" />
						<div className="feed__author">
							<p className="mb-0 mb-0 text-semiBold">{detail.fullname}</p>
							<p className="mb-0 date">{detail.createdAt}</p>
						</div>
					</div>
					<div className="col-md-4 text-md-right">
						<Link to={`/question/${detail.key}`} className="btn btn-base btn-rounded btn-shadow">Discuss</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default FeedItem;