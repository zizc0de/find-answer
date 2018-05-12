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

	fetch = () => {

		db.questionsRef().on('child_added', snap => {
			let obj = snap.val();					
			let fullname = "";
		
			db.usersRef().child(snap.val().userUid).on('value', user => {
				fullname = user.val().fullname;
				let data = {
					key: snap.key,
					title: obj.title,
					detail: obj.detail,
					createdAt: obj.createdAt,
					fullname: fullname
				}
				let arr = [data, ...this.state.questions];
				this.setState({
					questions: arr
				});
			});

		})

	}

	componentDidMount() {
		this.fetch();
	}

	render() {
		const { questions } = this.state;

		return (
			<Layout>
				<AuthUserContext.Consumer>
					{authUser =>
						<div className="row">
							<div className="col-lg-6 mb-3 mb-lg-0">
								<FeedPost userUid={authUser.uid}  />
								{ !!questions && <QuestionsList questions={questions} /> }
							</div>
							<div className="col-lg-6">
								sidebar content
							</div>
						</div>
					}
				</AuthUserContext.Consumer>
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