import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDfSDw6m4z7psoh7aL3nsZR232C_DR7OKA",
  authDomain: "crwn-db-v2.firebaseapp.com",
  projectId: "crwn-db-v2",
  storageBucket: "crwn-db-v2.appspot.com",
  messagingSenderId: "1000284762572",
  appId: "1:1000284762572:web:3801931ef1e8d3ef9ead69",
  measurementId: "G-5NNLC7DSZJ",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
