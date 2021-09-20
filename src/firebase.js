import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDdoghHwz_3qAUKBIFuci1cf9SD2EOfslM",
    authDomain: "helperscme-7e3f7.firebaseapp.com",
    projectId: "helperscme-7e3f7",
    storageBucket: "helperscme-7e3f7.appspot.com",
    messagingSenderId: "884544969002",
    appId: "1:884544969002:web:88ffea796b0b6198576653"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db= firebaseApp.firestore();
export const auth = firebase.auth();