import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBn4K6WaavMoDctU_A9GrMFRFt5DVMat1E",
    authDomain: "crwn-db-34c78.firebaseapp.com",
    databaseURL: "https://crwn-db-34c78.firebaseio.com",
    projectId: "crwn-db-34c78",
    storageBucket: "crwn-db-34c78.appspot.com",
    messagingSenderId: "461960203495",
    appId: "1:461960203495:web:dc7eb69b6ca797949d2642",
    measurementId: "G-4Y73JENHYF"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
} 



firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;