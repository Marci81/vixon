import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyB8tyQJF7al9HV2M-FSCo1fqfcb-zwN-Aw",
  authDomain: "vixon-32909.firebaseapp.com",
  databaseURL: "https://vixon-32909.firebaseio.com",
  projectId: "vixon-32909",
  storageBucket: "vixon-32909.appspot.com",
  messagingSenderId: "40009744719",
  appId: "1:40009744719:web:d7dc4a28a114ef51d4c53a",
  measurementId: "G-6BPM1YKC74"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  
  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
