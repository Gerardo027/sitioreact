// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyBj3Z6nBhTYwU50MPrCtknXAsWzybIt1Us',
    authDomain: 'fb-bdreact1-70ba1.firebaseapp.com',
    projectId: 'fb-bdreact1-70ba1',
    storageBucket: "fb-bdreact1-70ba1.appspot.com",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore();

