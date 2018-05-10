import { auth } from './firebase';

export const userCreate = (email, password) => auth.createUserWithEmailAndPassword(email, password);

export const userLogin = (email, password) => auth.signInWithEmailAndPassword(email, password);

export const userLogout = () => auth.signOut();