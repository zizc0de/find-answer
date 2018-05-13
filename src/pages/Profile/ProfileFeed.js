import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import {ProfileLayout as Layout} from 'containers';

import withAuthorization from 'components/Session/withAuthorization';
import { db } from 'utils/firebase';

class ProfileFeed extends Component {
	constructor(props) {
		super(props);

		this.state = {
			questions: [],
			filtered: [],
			status: ''
		};
	}

	getUserById = (userId) => {
		return new Promise(resolve => {
			db.usersRef().child(userId).on('value', user => {resolve(user.val())});
		});
	};

	filteredList = (questions, status) => {
		return new Promise(resolve => {
			let data = questions.filter(question => {
				return question.status == status
			});
			resolve(data);
		});
	}

	filter = (status) => {
		const { questions, filtered } = this.state;

		this.filteredList(questions, status)
		.then((data) => {
			this.setState({
				status: status,
				filtered: data
			})
		})
	}

	fetch = () => {
		const { authUser } = this.props;
		db.getQuestionsByUser(authUser.uid)
		.then(snap => {

			let values = snap.val();
			let questions = Object.keys(values).map(key => {
				return {
					key,
					...values[key]
				};
			});

			questions.reverse();
			this.setState({
				status: 'unsolved',
				questions
			});

			this.filter('unsolved');
		})
		.catch(error => {
			console.log(error);
		})
	}

	componentDidMount() {
		this.fetch();
	}

	render() {
		const { filtered, status } = this.state;

		return (
			<Layout>
				<div className="row mb-3">
					<div className="col-12">
						<div className="table-responsive">
							<ul className="horizontal-tab-nav">
								<li className={status == 'unsolved' ? 'active' : ''}>
									<a href="javascript:void(0)" onClick={event => {event.preventDefault(); this.filter('unsolved')}}>Unsolved</a>
								</li>
								<li className={status == 'solved' ? 'active' : ''}>
									<a href="javascript:void(0)" onClick={event => {event.preventDefault(); this.filter('solved')}}>Solved</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row mb-3">
					<div className="col-12">
						{ !!filtered && <QuestionsList questions={filtered} />}
					</div>
				</div>
			</Layout>
		);
	}
}

const QuestionsList = ({ questions }) =>
	<div>
		{questions.map((question) =>
			<div className="box mb-3" key={question.key}>
				<div className="box-body flex">
					<div className="row">
						<div className="col-md-6 flex-center">
							<h5 className="text-semiBold font-18 mb-0">{question.title}</h5>
							<small className="color-grey">{question.createdAt}</small>
						</div>
						<div className="col-md-3 text-center flex-center">
							<h3 className="color-primary mb-0 text-semiBold">0</h3>
							<p className="mb-0">Respondent</p>
						</div>
						<div className="col-md-3 text-right flex-center">
							<Link to={'/question/'+question.key} className="btn btn-md btn-outline-base">
								Detail
							</Link>
						</div>
					</div>
				</div>
			</div>
		)}
	</div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(ProfileFeed);