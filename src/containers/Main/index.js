import React, { Component } from 'react';
import Header from './Header';

class MainLayout extends Component {
	render() {
		return (
			<div>
				<Header />
				<div id="main" className="container">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default MainLayout;