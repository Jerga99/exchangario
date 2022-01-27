import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBeLYVIwvoBjbDrlVrlFJi5hUjMaPBqn4Y",
  authDomain: "exchangario-37abd.firebaseapp.com",
  projectId: "exchangario-37abd",
  storageBucket: "exchangario-37abd.appspot.com",
  messagingSenderId: "772340197654",
  appId: "1:772340197654:web:4933f9acdfa0c6ae0d0837"
};

initializeApp(firebaseConfig);
export const db = getFirestore();

