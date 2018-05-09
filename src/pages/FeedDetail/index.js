import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MainLayout as Layout } from 'containers';
import ReplyPost from './ReplyPost';
import ReplyList from './ReplyList';
import './_style.scss';

class FeedDetail extends Component {
	render() {
		return (
			<Layout>
				<div className="row">
					<div className="col-lg-9 ml-auto mr-auto">

						<div className="box box-shadow">
							<div className="row">
								<div className="col-12">
									<img src={require('assets/images/profile.png')} className="rounded-circle float-left" style={{ height: 65, width: 65, objectFit: 'cover' }} />
									<div className="float-left ml-3">
										<Link to="/u/zizcode" className="color-primary">
											<p className="mb-0 text-semiBold">Abdul Aziz</p>
										</Link>									
										<p className="font-14 color-grey mb-0" style={{ marginBottom: -10 }}>Frontend Developer</p>
										<p className="font-12 color-grey">10/05/2018 09:00</p>
									</div>
								</div>
							</div>
							<div className="row mt-4">
								<div className="col-12">
									<h2 className="text-bold">React app from scratch</h2>
									<p>
									If you just want to see what is react snd create small app you can use create-react-app. It’s not perfect choice for production because on real app you need to manage state, work with async actions (ajax requests)… In this case you mostly need webpack or other bundler. But for running your first hello world app on PC create-react-app is a good choise.
									</p>
									<p>
									After installing node.js, npm helps you to install a new packages. To work with create-react-app you need to install it globally using next command:
									</p>
								</div>
							</div>
						</div>

						<div className="row mt-4">
							<div className="col-12">
								<p className="text-semiBold">Responses</p>
							</div>
						</div>

						<div className="row mb-5">
							<div className="col-12">
								<ReplyPost />
							</div>
						</div>

						<div className="row">
							<div className="col-12">
								<ReplyList />
							</div>
						</div>

					</div>
				</div>
			</Layout>
		);
	}
}

export default FeedDetail;