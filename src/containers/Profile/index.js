import React, { Component } from 'react';
import {MainLayout as Layout} from 'containers';
import Sidebar from './ProfileSidebar';

class ProfileLayout extends Component {
	render() {
		return (
			<Layout>
				<div className="row">
					<div className="col-lg-4 mb-3 mb-lg-0">
						<Sidebar />
					</div>
					<div className="col-lg-8">
						{this.props.children}
					</div>
				</div>
			</Layout>
		);
	}
}

export default ProfileLayout;