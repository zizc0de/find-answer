import React, { Component } from 'react';
import { MainLayout as Layout } from 'containers';
import FeedPost from './FeedPost';
import FeedItem from './FeedItem';

class Feed extends Component {
	render() {
		return (
			<Layout>
				<div className="row">
					<div className="col-lg-6 mb-3 mb-lg-0">
						<FeedPost />
						<FeedItem />
					</div>
					<div className="col-lg-6">
						Sidebar content
					</div>
				</div>
			</Layout>
		);
	}
}

export default Feed;