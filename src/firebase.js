// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDLPL51zj229YW2n0S3dwBS2Qeo6pZspI0",
  authDomain: "clone-dee3d.firebaseapp.com",
  projectId: "clone-dee3d",
  storageBucket: "clone-dee3d.appspot.com",
  messagingSenderId: "811964141919",
  appId: "1:811964141919:web:e9e28cef85d95c59a2a6ea",
  measurementId: "G-1SM3FKL9LP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
