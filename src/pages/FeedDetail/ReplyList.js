import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReplyList extends Component {
	render() {
		return (
			<div className="box box-shadow mb-3">
				<div className="row">
					<div className="col-12">
						<img src={require('assets/images/profile.png')} className="rounded-circle float-left" style={{ height: 40, width: 40, objectFit: 'cover' }} />
						<div className="float-left ml-3">
							<Link to="/u/zizcode" className="color-primary">
								<p className="mb-0 text-semiBold">Abdul Aziz</p>
							</Link>											
							<p className="font-12 color-grey">10/05/2018 09:00</p>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-12 color-dark-grey">
						<p>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default ReplyList;
