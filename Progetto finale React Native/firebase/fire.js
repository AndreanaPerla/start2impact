import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtCeqUrFPq314DjR0oTy21-CFjze3pIlQ",
  authDomain: "visit-cagliari-s2i.firebaseapp.com",
  projectId: "visit-cagliari-s2i",
  storageBucket: "visit-cagliari-s2i.appspot.com",
  messagingSenderId: "577717009264",
  appId: "1:577717009264:web:51f4420f60b2caf712edb5",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
