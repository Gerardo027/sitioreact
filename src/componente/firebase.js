// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBj3Z6nBhTYwU50MPrCtknXAsWzybIt1Us',
    authDomain: 'fb-bdreact1-70ba1.firebaseapp.com',
    projectId: 'fb-bdreact1-70ba1',
    storageBucket: "fb-bdreact1-70ba1.appspot.com",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.Firestore();

