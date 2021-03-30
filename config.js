import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB3a8dU7rRrDzFGne4XbBxUUgsNnpM8UxA",
    authDomain: "o2zone.firebaseapp.com",
    databaseURL: "https://o2zone-default-rtdb.firebaseio.com",
    projectId: "o2zone",
    storageBucket: "o2zone.appspot.com",
    messagingSenderId: "43724698213",
    appId: "1:43724698213:web:ba5260066dbf896e53cc8c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.database()