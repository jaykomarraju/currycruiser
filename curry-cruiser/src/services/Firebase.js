import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const config = {
    apiKey: "AIzaSyDVMgcZyamxrNujrq5Za1tWGY1eKGcwN2c",
  authDomain: "curry-cruiser.firebaseapp.com",
  projectId: "curry-cruiser",
  storageBucket: "curry-cruiser.appspot.com",
  messagingSenderId: "746796593358",
  appId: "1:746796593358:web:be2b2e7b8262aacd3d609f",
  measurementId: "G-TL8MCGL4QR"
};

firebase.initializeApp(config);

const FirebaseAuth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { FirebaseAuth, db, storage };
