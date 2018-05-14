import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { db } from 'utils/firebase';

class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			responses: []
		}
	}

	getUserById = (userId) => {
		return new Promise(resolve => {
			db.usersRef().child(userId).on('value', user => {resolve(user.val())});
		});
	};

	getTitle = (questionUid) => {
		return new Promise(resolve => {
			db.questionsRef().child(questionUid).on('value', question => {resolve(question.val())});
		});
	};

	getQuestion = (questions) => {
		Promise.all(questions.map(reply => {
			return this.getTitle(reply.questionUid).then((question) => {
				return {
					title: question.title,
					...reply
				}
			})
		})).then(questions => {
			this.setState({
				responses: questions
			})
		})		
	}

	componentDidMount() {

		db.getLatestResponse()
		.then(snap => {
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
				this.getQuestion(replyList);
			})

		})

	}

	render() {
		const { responses } = this.state;

		return (
			<div>
				<div className="row">
					<div className="col-12">
						<h5 className="text-semiBold">10 Top Respondent</h5>
					</div>
				</div>
				<div className="row mt-3">
					<ResponseList responses={responses} />
				</div>
			</div>
		);
	}
}

const ResponseList = ({ responses }) =>
	<div>
		{responses.map((response) =>
			<div key={response.key}>
				<div className="col-12 mb-3">
					<p className="mb-0">{ response.response.substring(0, 70) + "..." } on <Link to={`/question/${response.questionUid}`}className="color-primary">{response.title}</Link></p>
					<small className="color-grey">response by {response.fullname}</small>
				</div>				
			</div>
		)}
	</div>

export default Sidebar;