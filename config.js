import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBvP1tVZ8p0faRlMJmVPb7qVFJllvP8Q90",
    authDomain: "project-67-52c2b.firebaseapp.com",
    databaseURL: "https://project-67-52c2b-default-rtdb.firebaseio.com",
    projectId: "project-67-52c2b",
    storageBucket: "project-67-52c2b.appspot.com",
    messagingSenderId: "350391296966",
    appId: "1:350391296966:web:00837ff0537194727f88c7",
    measurementId: "G-1F0CP4BKFC"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();