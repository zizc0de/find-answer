import * as firebase from 'firebase';

const config = {
	apiKey: "",
	authDomain: "",
	databaseURL: "",
	projectId: "",
	storageBucket: "",
	messagingSenderId: ""
}

firebase.initializeApp(config);

const db = firebase.database();
const auth = firebase.auth();

export {
	db,
	auth
};