import firebase from "firebase/app";
// import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.REACT_APP_FIREBASE_STORAGE,
    messagingSenderId: process.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
    appId: process.REACT_APP_FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
export default firebase