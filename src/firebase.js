import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCiC0UrxX28c3xQVrAKoQaDLjjN_4hU51s",
    authDomain: "dummyfil.firebaseapp.com",
    projectId: "dummyfil",
    storageBucket: "dummyfil.appspot.com",
    messagingSenderId: "130693841118",
    appId: "1:130693841118:web:2e1e9a32850b6402a7824f",
    measurementId: "G-FC0NEZVE7Z"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword,signInWithEmailAndPassword };
export default app;
