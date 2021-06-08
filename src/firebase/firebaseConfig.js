import firebase from "firebase"
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyA1JmCmUbI3JjI5yoWRs95CPFad4-1XKBA",
    authDomain: "mini-book-da489.firebaseapp.com",
    projectId: "mini-book-da489",
    storageBucket: "mini-book-da489.appspot.com",
    messagingSenderId: "900556035243",
    appId: "1:900556035243:web:0a76c17e47f8b185c893ee"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const storage = firebase.storage()
const auth = firebase.auth()

// collection references
const recipesCollection = db.collection('recipes')

// export utils/refs
export {
  db,
  storage,
  auth,
  recipesCollection,
}