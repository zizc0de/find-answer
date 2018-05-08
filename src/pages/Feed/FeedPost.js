import React, { Component } from 'react';

class FeedPost extends Component {
	render() {
		return (
			<div className="box box-shadow mb-3">
				<textarea placeholder="What's on your mind?" className="form-control" rows="4" style={{ resize: 'none', border: 'none' }}></textarea>
				<div className="text-right">
					<button type="button" class="btn btn-base btn-rounded btn-shadow">Share</button>
				</div>
			</div>
		);
	}
}

export default FeedPost;