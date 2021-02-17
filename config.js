import * as firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyCKf9KOX5Byl95oxI2djYz4-BenCh5cxes",
  authDomain: "wily-5fb0d.firebaseapp.com",
  databaseURL:"https://wily-5fb0d.firebaseio.com",
  projectId: "wily-5fb0d",
  storageBucket: "wily-5fb0d.appspot.com",
  messagingSenderId: "463322439432",
  appId: "1:463322439432:web:ef090cf080fdcbe31496bd"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();