import * as firebase from 'firebase';

const config = {
	apiKey: "AIzaSyA2G9HSbYFMvv3eRu8imXN3WrGtqC_H8JM",
	authDomain: "find-answer.firebaseapp.com",
	databaseURL: "https://find-answer.firebaseio.com",
	projectId: "find-answer",
	storageBucket: "find-answer.appspot.com",
	messagingSenderId: "1090502266839"
}

firebase.initializeApp(config);

const auth = firebase.auth();

export {
	auth
};