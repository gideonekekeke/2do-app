import firebase from "firebase";

import "firebase/firestore";
import "firebase/auth";

export const app = firebase.initializeApp({
  apiKey: "AIzaSyA-JbdiiIAZGzCuv1nqQVWkNyCdIg92a1c",
  authDomain: "personeltodo.firebaseapp.com",
  projectId: "personeltodo",
  storageBucket: "personeltodo.appspot.com",
  messagingSenderId: "538945050826",
  appId: "1:538945050826:web:0f84ea7e750a02ed1dfc33",
});
