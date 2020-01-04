import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDaWV6GZoNf5VyNEy9QDfOYXF7r8UbmVhI',
  authDomain: 'poridhan-db.firebaseapp.com',
  databaseURL: 'https://poridhan-db.firebaseio.com',
  projectId: 'poridhan-db',
  storageBucket: 'poridhan-db.appspot.com',
  messagingSenderId: '220207500988',
  appId: '1:220207500988:web:55ebf6b370fdec4996cab9',
  measurementId: 'G-3LE7HPQ6GG',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
