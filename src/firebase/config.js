import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { GoogleAuthProvider } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBzvbaKl4MOH4rCAQf9xqbYSi77RgcIq2I",
	authDomain: "kodecamp-auth.firebaseapp.com",
	projectId: "kodecamp-auth",
	storageBucket: "kodecamp-auth.appspot.com",
	messagingSenderId: "595185344018",
	appId: "1:595185344018:web:2b20771fb688614b9ec2cb"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export { auth, provider };
export default getFirestore();
