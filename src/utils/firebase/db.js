import { db } from './firebase';
import moment from 'moment';

const now = moment(new Date()).format('MM/DD/YYYY hh:mm');

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
		createdAt: now,
		updatedAt: ''
	});

export const getQuestionByUid = (uid) =>
	db.ref(`questions/${uid}`).once('value');

export const onceGetQuestions = () =>
	db.ref(`questions`).once('value');

export const questionsRef = () =>
	db.ref().child('questions');