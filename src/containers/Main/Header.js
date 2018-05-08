import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-white fixed-top">
				<div className="container-fluid">
					<a className="navbar-brand ml-auto mr-auto" href="#">PAPR.</a>
				</div>
			</nav>
		);
	}
}

export default Header;