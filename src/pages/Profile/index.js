import React, { Component } from 'react';
import {ProfileLayout as Layout} from 'containers';

import withAuthorization from 'components/Session/withAuthorization';

class Profile extends Component {
	render() {
		return (
			<Layout>
				Profile Detail
			</Layout>
		);
	}
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Profile);