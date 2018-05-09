import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReplyPost extends Component {
	render() {
		return (
			<div className="box box-shadow">
				<div className="row">
					<div className="col-12">
						<div className="d-flex" style={{ flexFlow: 'row', alignItems: 'center' }}>
							<img src={require('assets/images/profile.png')} className="rounded-circle" style={{ height: 40, width: 40, objectFit: 'cover' }} />
							<div className="d-flex ml-3">
								<Link to="/u/zizcode" className="color-primary">
									<p className="mb-0 text-semiBold">Abdul Aziz</p>
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row mt-3">
					<div className="col-12">
						<textarea className="form-control pl-0" placeholder="Write a response..." rows="4" style={{ border: 'none', resize: 'none' }}></textarea>
						<button className="btn btn-md btn-rounded btn-outline-base mr-3">Reply</button>
						<button className="btn btn-md btn-rounded btn-sencodary">Cancel</button>
					</div>
				</div>
			</div>
		);
	}
}

export default ReplyPost;