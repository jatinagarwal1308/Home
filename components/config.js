import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyDyDIxdNypsTr5bIhehgQa2hz7TJOMQhmA",
    authDomain: "home-899e2.firebaseapp.com",
    databaseURL: "https://home-899e2.firebaseio.com",
    projectId: "home-899e2",
    storageBucket: "home-899e2.appspot.com",
    messagingSenderId: "16638543620",
    appId: "1:16638543620:web:0199b4761b78b6effbb251",
    measurementId: "G-2X5ZG5DN5Z"
  };
  // Initialize Firebase
  let app = firebase.initializeApp(firebaseConfig);
  export const db = app.database();