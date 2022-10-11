import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyC0Ara0Yv0WCsuakAK_UXuxi-olnwOeYrw",
  authDomain: "spatial-country-307811.firebaseapp.com",
  databaseURL: "https://spatial-country-307811-default-rtdb.firebaseio.com",
  projectId: "spatial-country-307811",
  storageBucket: "spatial-country-307811.appspot.com",
  messagingSenderId: "238346211482",
  appId: "1:238346211482:web:9db6d615bc7bb24d6d0f23"
};


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
