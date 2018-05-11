import { db } from './firebase';
import moment from 'moment';

const now = moment(new Date()).format('MM/DD/YYYY hh:mm');

// USERS

export const doCreateUser = (id, fullname, email) =>
	db.ref(`users/${id}`).set({
		fullname,
		email
	});

export const onceGetUsers = () =>
	db.ref(`users`).once('value');

// QUESTIONS

export const doCreateQuestion = (userUid, title, detail) =>
	db.ref(`questions`).push({
		userUid,
		title,
		detail,
		created_time: now,
		updated_time: ''
	});