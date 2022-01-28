import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "../seed";

// seed database

//config

const config = {
  piKey: "AIzaSyBPZENfTFkbVbD-MIA36inWVRhaPQOoMp8",
  authDomain: "netflix-mod-7fbb4.firebaseapp.com",
  projectId: "netflix-mod-7fbb4",
  storageBucket: "netflix-mod-7fbb4.appspot.com",
  messagingSenderId: "710924060161",
  appId: "1:710924060161:web:13ec093ac41caf55d16200",
};

const firebase = Firebase.initializeApp(config);

seedDatabase(firebase);

export { firebase };
