import React, { Component } from 'react';

import Layout from 'containers/Main';
import FeedPost from './FeedPost';
import FeedItem from './FeedItem';

class Feed extends Component {
	render() {
		return (
			<Layout>
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<FeedPost />
							<FeedItem />
						</div>
						<div className="col-lg-6">
							Sidebar content
						</div>
					</div>
				</div>
			</Layout>
		);
	}
}

export default Feed;