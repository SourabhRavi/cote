// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyByn5PHeLcP4oBTL67gsa2JcbL_RTLqwMA",
    authDomain: "cote-app-6d41b.firebaseapp.com",
    projectId: "cote-app-6d41b",
    storageBucket: "cote-app-6d41b.appspot.com",
    messagingSenderId: "714667450191",
    appId: "1:714667450191:web:01e426bf3d88c00d306f3a"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const firestore = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { firestore, auth };
