// Initialize Firebase
// aqui van tus credenciales de firebase
 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyBNAcRDLUxI2f73XA8ZAIUDYcoD4eQpAL0",
  authDomain: "cvonline-d94f6.firebaseapp.com",
  databaseURL: "https://cvonline-d94f6.firebaseio.com",
  projectId: "cvonline-d94f6",
  storageBucket: "cvonline-d94f6.appspot.com",
  messagingSenderId: "668140159170"
};
firebase.initializeApp(config);

const provider = new firebase.auth.FacebookAuthProvider();
const auth     = firebase.auth();
const db       = firebase.database();
const storage  = firebase.storage();

//referencias
const users = db.ref('users');

// Auth State Changed
auth.onAuthStateChanged((user) => {
  if (user) {
		signedIn(user);
  } else {
		signedOut();
  }
});
