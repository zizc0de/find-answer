import React, { Component } from 'react';
import {MainLayout as Layout} from 'containers';

import AuthUserContext from 'components/Session/AuthUserContext';

import Sidebar from './ProfileSidebar';

class ProfileLayout extends Component {
	render() {
		return (
			<Layout>
				<AuthUserContext.Consumer>
					{context =>
						<div className="row">
							<div className="col-lg-4 mb-3 mb-lg-0">
								<Sidebar authUser={context.state} />
							</div>
							<div className="col-lg-8">
								{this.props.children}
							</div>
						</div>
					}
				</AuthUserContext.Consumer>
			</Layout>
		);
	}
}

export default ProfileLayout;