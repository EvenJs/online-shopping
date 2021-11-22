import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyBuQXVeQSSE1B0LCP9326fkgNRA3t138TU",
  authDomain: "online-shopping-89ee4.firebaseapp.com",
  projectId: "online-shopping-89ee4",
  storageBucket: "online-shopping-89ee4.appspot.com",
  messagingSenderId: "920476033852",
  appId: "1:920476033852:web:2488c5b2afd540d3a7b439",
  measurementId: "G-DJQ23686WN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
