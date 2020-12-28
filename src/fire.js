import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA740moaoHMwINs7B8VqjRgCtpNwn4XH3I",
    authDomain: "login-cadfa.firebaseapp.com",
    projectId: "login-cadfa",
    storageBucket: "login-cadfa.appspot.com",
    messagingSenderId: "13104565166",
    appId: "1:13104565166:web:a63a0b52e18d188a8c563f"
  };
  // Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;