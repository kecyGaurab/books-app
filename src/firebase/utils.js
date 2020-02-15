import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDpgdJwFh2mIuApoX0pYet5D9psWqcK12I',
  authDomain: 'books-app-adc77.firebaseapp.com',
  databaseURL: 'https://books-app-adc77.firebaseio.com',
  projectId: 'books-app-adc77',
  storageBucket: 'books-app-adc77.appspot.com',
  messagingSenderId: '895092517377',
  appId: '1:895092517377:web:77af8347b6db164047ae00',
  measurementId: 'G-ZDJMK1286J',
};

firebase.initializeApp (config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc (`users/${userAuth.uid}`);

  const snapShot = await userRef.get ();

  if (!snapShot.exists) {
    const {displayName, email, photoURL} = userAuth;
    const createdAt = new Date ();

    try {
      await userRef.set ({
        displayName,
        email,
        createdAt,
        photoURL,
        ...additionalData,
      });
    } catch (error) {
      console.log ('error creating user', error.message);
    }
  }

  return userRef;
};
export const auth = firebase.auth ();
export const firestore = firebase.firestore ();

const provider = new firebase.auth.GoogleAuthProvider ();
provider.setCustomParameters ({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup (provider);
