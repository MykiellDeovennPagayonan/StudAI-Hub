import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTN3MZdALV4oIdYMw8fLKZe7A_pDCNOSc",
  authDomain: "studai-hub.firebaseapp.com",
  projectId: "studai-hub",
  storageBucket: "studai-hub.appspot.com",
  messagingSenderId: "703921985589",
  appId: "1:703921985589:web:802bf54b99d017f703797c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)