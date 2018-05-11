import React, { Component } from 'react';

import { MainLayout as Layout } from 'containers';
import FeedPost from './FeedPost';
import FeedItem from './FeedItem';

import withAuthorization from 'components/Session/withAuthorization';
import AuthUserContext from 'components/Session/AuthUserContext';

class Feed extends Component {
	render() {
		return (
			<Layout>
				<AuthUserContext.Consumer>
					{authUser =>
						<div className="row">
							<div className="col-lg-6 mb-3 mb-lg-0">
								<FeedPost userUid={authUser.uid} />
								<FeedItem />
							</div>
							<div className="col-lg-6">
								sidebar content
							</div>
						</div>
					}
				</AuthUserContext.Consumer>
			</Layout>
		);
	}
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Feed);