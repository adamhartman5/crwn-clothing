import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCeuKER4xzz0QQJFaPU-Zpn4J0Ejj_lSCo',
	authDomain: 'crwn-clothing-db-ec4e1.firebaseapp.com',
	projectId: 'crwn-clothing-db-ec4e1',
	storageBucket: 'crwn-clothing-db-ec4e1.firebasestorage.app',
	messagingSenderId: '957168606998',
	appId: '1:957168606998:web:c682d1e25ece4573553a37',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
	prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
