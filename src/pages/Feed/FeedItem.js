import React, { Component } from 'react';
import './_style.scss';

class FeedItem extends Component {
	render() {
		return (
			<div className="feed">
				<h5 className="feed__title">Lorem ipsum dollar sit amet</h5>
				<div className="feed__content">
					<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.				
					</p>
				</div>
				<div className="row mt-4">
					<div className="col-lg-9">
						<img src={require('assets/images/profile.png')} className="img-fluid rounded-circle author-image" />
						<div className="feed__author">
							<p className="mb-0 mb-0 text-semiBold">Abdul Aziz</p>
							<p className="mb-0 date">10/06/2018 06:00</p>
						</div>
					</div>
					<div className="col-lg-3 text-right">
						<button type="button" class="btn btn-base btn-rounded btn-shadow">Discuss</button>
					</div>
				</div>
			</div>
		);
	}
}

export default FeedItem;