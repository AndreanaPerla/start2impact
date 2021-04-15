import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDmrQrn_c0FrF0GoxnGprI1FK1e5dzK7Nc",
  authDomain: "progetto-finale-front-end-s2i.firebaseapp.com",
  projectId: "progetto-finale-front-end-s2i",
  storageBucket: "progetto-finale-front-end-s2i.appspot.com",
  messagingSenderId: "61256287133",
  appId: "1:61256287133:web:0081df37aacf14c7f76574",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
