import React, { Component } from 'react';

import { MainLayout as Layout } from 'containers';
import FeedPost from './FeedPost';
import FeedItem from './FeedItem';

import withAuthorization from 'components/Session/withAuthorization';
import AuthUserContext from 'components/Session/AuthUserContext';

import { db } from 'utils/firebase';

class Feed extends Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: []
		};
	}

	getUserById = (userId) => {
		return new Promise(resolve => {
			db.usersRef().child(userId).on('value', user => {resolve(user.val())});
		});
	};

	fetch = () => {

		db.questionsRef().once('value', snap => {
			let values = snap.val();
			let questions = Object.keys(values).map(key => {
				return {
					key,
					...values[key]
				};
			});

			Promise.all(questions.map(question => {
				return this.getUserById(question.userUid).then((user) => {
					return {
						fullname: user.fullname,
						...question
					};
				});
			})).then(questions => {
				questions.reverse();
				this.setState({
					questions
				});
			})

		})

	}

	componentDidMount() {
		this.fetch();
	}

	render() {
		const { questions } = this.state;
		const { authUser } = this.props;
		
		return (
			<Layout>
				<div className="row">
					<div className="col-lg-6 mb-3 mb-lg-0">
						<FeedPost userUid={authUser.uid} getData={this.fetch} />
						{ !!questions && <QuestionsList questions={questions} /> }
					</div>
					<div className="col-lg-6">
						sidebar content
					</div>
				</div>
			</Layout>
		);
	}
}

const QuestionsList = ({ questions }) =>
	<div>
		{questions.map((question) =>
			<div key={question.key}>
				<FeedItem questions={question} />
			</div>
		)}
	</div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(Feed);