import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEyz20zVWv7oHxRgfUqbocadVeRGImksI",
  authDomain: "irctc-booking-aea99.firebaseapp.com",
  projectId: "irctc-booking-aea99",
  storageBucket: "irctc-booking-aea99.appspot.com",
  messagingSenderId: "527282345575",
  appId: "1:527282345575:web:0a2ed2cbb60bd46d24e6c2",
  measurementId: "G-N72HLG6BTV"
};

const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);

export const db=getFirestore(app);
