import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDsBaefz74giYCYuMFYmDy-2KcVT6XLLE0",
    authDomain: "turnout-16b7e.firebaseapp.com",
    databaseURL: "https://turnout-16b7e.firebaseio.com",
    projectId: "turnout-16b7e",
    storageBucket: "",
    messagingSenderId: "582122093434",
    appId: "1:582122093434:web:f569ebaa6e5a70a9"
  };
 
const firebaseApp = firebase.initializeApp(firebaseConfig)

export default firebaseApp