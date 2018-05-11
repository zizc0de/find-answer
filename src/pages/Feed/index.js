import React, { Component } from 'react';

import { MainLayout as Layout } from 'containers';
import FeedPost from './FeedPost';
import FeedItem from './FeedItem';

import withAuthorization from 'components/Session/withAuthorization';

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

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Feed);