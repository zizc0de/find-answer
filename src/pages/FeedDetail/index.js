import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import nl2br from 'react-nl2br';

import { MainLayout as Layout } from 'containers';
import ReplyPost from './ReplyPost';
import ReplyList from './ReplyList';

import './_style.scss';

import withAuthorization from 'components/Session/withAuthorization';
import { db } from 'utils/firebase';

class FeedDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			detail: {},
			response: []
		}
	}

	getUserById = (userId) => {
		return new Promise(resolve => {
			db.usersRef().child(userId).on('value', user => {resolve(user.val())});
		});
	};

	getResponse = (uid) => {

		db.getQuestionResponse(uid).on('value', (snap) => {
			let values = snap.val();
			let replyList = Object.keys(values).map(key => {
				return {
					key,
					...values[key]
				}
			});

			Promise.all(replyList.map(reply => {
				return this.getUserById(reply.userUid).then((user) => {
					return {
						fullname: user.fullname,
						...reply
					}
				});
			})).then(replyList => {
				replyList.reverse();
				this.setState({
					response: replyList
				})
			})

		})

	}

	fetch = (uid) => {
		db.getQuestionByUid(uid).then(snap => {
			let values = snap.val();
			
			this.getUserById(values.userUid)
			.then((user) =>{
				let data = {
					key: uid,
					fullname: user.fullname,
					headline: user.headline,
					...values
				}
				this.setState({
					detail: data
				})
			})
			this.getResponse(uid);
		})
	}

	getData = () => {
		this.fetch(this.state.detail.key);
	}

	componentDidMount() {
		const { match: { params } } = this.props;
		this.fetch(params.uid);
	}

	render() {
		const { detail, response } = this.state;
		const { authUser } = this.props;
		
		return (
			<Layout>
				<div className="row">
					<div className="col-lg-9 ml-auto mr-auto">

						<div className="box box-shadow">
							<div className="row">
								<div className="col-md-9">
									<img src={require('assets/images/profile.png')} className="rounded-circle float-left" style={{ height: 65, width: 65, objectFit: 'cover' }} />
									<div className="float-left ml-3">
										<p className="mb-0 text-semiBold">{detail.fullname}</p>
										<p className="font-14 color-grey mb-0" style={{ marginBottom: -10 }}>{detail.headline}</p>
										<p className="font-12 color-grey">{detail.createdAt}</p>
									</div>
								</div>
							{detail.status == 'solved' &&
								<div className="col-md-3 col-sm-6 text-left text-sm-right">
									<button type="button" className="btn btn-md btn-outline-base" disabled="disabled">Solved</button>
								</div>
							}								
							</div>
							<div className="row mt-4">
								<div className="col-12">
									<h2 className="text-bold mb-3">{detail.title}</h2>
									<p>{nl2br(detail.detail)}</p>
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
								<ReplyPost authUser={authUser} questionUid={detail.key}/>
							</div>
						</div>

						<div className="row">
							<div className="col-12">
								{ !!response && <ResponseList replyList={response} question={detail} getData={this.getData} />}
							</div>
						</div>

					</div>
				</div>
			</Layout>
		);
	}
}

const ResponseList = ({ replyList, question, getData }) =>
	<div>
		{replyList.map((response) =>
			<div key={response.key}>
				<ReplyList response={response} question={question} getData={getData} />
			</div>
		)}
	</div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(FeedDetail);