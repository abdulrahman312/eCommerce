import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCtl1C9U0df0d3h5U91G0FQkQTfZtzJDEU",
    authDomain: "ecommerce-ad02e.firebaseapp.com",
    projectId: "ecommerce-ad02e",
    storageBucket: "ecommerce-ad02e.appspot.com",
    messagingSenderId: "698484717783",
    appId: "1:698484717783:web:bf8cbc69a2788b5defd892",
    measurementId: "G-DN86C200SQ"
}


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

// Google auth utility
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


