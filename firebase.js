import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpdJmX25N5aE2mDEgUBSvTd3GJ1c0Wy-g",
  authDomain: "olx-auth-ae1ea.firebaseapp.com",
  databaseURL: "https://olx-auth-ae1ea-default-rtdb.firebaseio.com",
  projectId: "olx-auth-ae1ea",
  storageBucket: "olx-auth-ae1ea.appspot.com",
  messagingSenderId: "944684384538",
  appId: "1:944684384538:web:5f3507e1e78680cb08aca3",
  measurementId: "G-BQCV7MHV5Y",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
}