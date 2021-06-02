import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBaqzwtu1DtFQmob2Srf7ODIx5px2uHCHc",
  authDomain: "fir-602ca.firebaseapp.com",
  projectId: "fir-602ca",
  storageBucket: "fir-602ca.appspot.com",
  messagingSenderId: "482178601302",
  appId: "1:482178601302:web:436a5f5830e63d7ea0c6f7",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
