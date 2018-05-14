import { db } from './firebase';
import moment from 'moment';

const now = moment(new Date()).format('DD/MM/YYYY hh:mm');

// USERS

export const doCreateUser = (uid, fullname, email) =>
	db.ref(`users/${uid}`).set({
		fullname,
		email,
		headline: ''
	});

export const doUpdateUser = (uid, fullname, headline) =>
	db.ref(`users/${uid}`).update({
		fullname,
		headline
	});

export const onceGetUsers = () =>
	db.ref(`users`).once('value');

export const getUserByUid = (uid) =>
	db.ref(`users/${uid}`).once('value');

export const usersRef = () =>
	db.ref().child('users');
	
// QUESTIONS

export const doCreateQuestion = (userUid, title, detail) =>
	db.ref(`questions`).push({
		userUid,
		title,
		detail,
		status: 'unsolved',
		createdAt: now,
		updatedAt: ''
	});

export const getQuestionByUid = (uid) =>
	db.ref(`questions/${uid}`).once('value');

export const onceGetQuestions = () =>
	db.ref(`questions`).once('value');

export const questionsRef = () =>
	db.ref().child('questions');

export const getQuestionsByUser = (uid) =>
	db.ref(`questions`).orderByChild('userUid').equalTo(uid).once('value');

export const doUpdateQuestionStatus = (uid, status) =>
	db.ref(`questions/${uid}`).update({
		status
	})

// QUESTION RESPONSE

export const doCreateResponse = (userUid, questionUid, response) =>
	db.ref(`questions_response`).push({
		userUid,
		questionUid,
		response,
		vote: 0,
		accepted: false,
		createdAt: now,
		updatedAt: ''		
	})

export const getQuestionResponse = (questionUid) =>
	db.ref(`questions_response`).orderByChild('questionUid').equalTo(questionUid);

export const questionSolved = (uid) =>
	db.ref(`questions_response/${uid}`).update({
		accepted: true
	})