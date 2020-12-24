import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAONpPh4rfmCtjh4jjKNaIIxNbxcctVOy4",
  authDomain: "newsletter-9c626.firebaseapp.com",
  databaseURL: "https://newsletter-9c626-default-rtdb.firebaseio.com",
  projectId: "newsletter-9c626",
  storageBucket: "newsletter-9c626.appspot.com",
  messagingSenderId: "290632052019",
  appId: "1:290632052019:web:940b552f9ab0ad7aff6246",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
