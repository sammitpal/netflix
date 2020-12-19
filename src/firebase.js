import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDNAM2d24B7g9nz21zC-7nUTE27hqKUf-U",
    authDomain: "netflix-94cb6.firebaseapp.com",
    databaseURL: "https://netflix-94cb6.firebaseio.com",
    projectId: "netflix-94cb6",
    storageBucket: "netflix-94cb6.appspot.com",
    messagingSenderId: "277480889449",
    appId: "1:277480889449:web:50101709d5e4d034b396f8",
    measurementId: "G-JFB8947N7S"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export {auth};