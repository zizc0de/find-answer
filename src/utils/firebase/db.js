import { db } from './firebase';

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
		detail
	});