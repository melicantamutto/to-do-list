import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD8tonH-R-L5YmiK6Mv3ojGZSdF3Rtgs0g",
  authDomain: "to-do-list-d76aa.firebaseapp.com",
  projectId: "to-do-list-d76aa",
  storageBucket: "to-do-list-d76aa.appspot.com",
  messagingSenderId: "215976367676",
  appId: "1:215976367676:web:183587c07f9705dc361539",
};

// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
