import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAFHr1y0yz6V0iHejS50I0lNL5eGql1pVk",
    authDomain: "online-exam-dashboard-reactapp.firebaseapp.com",
    databaseURL: "https://online-exam-dashboard-reactapp.firebaseio.com",
    projectId: "online-exam-dashboard-reactapp",
    storageBucket: "online-exam-dashboard-reactapp.appspot.com",
    messagingSenderId: "1044996371065",
    appId: "1:1044996371065:web:2aeafc5af7bee96c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
