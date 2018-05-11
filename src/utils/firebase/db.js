import { db } from './firebase';

export const doCreateUser = (id, fullname, email) =>
	db.ref(`users/${id}`).set({
		fullname,
		email
	});

export const onceGetUsers = () =>
	db.ref(`users`).once('value');