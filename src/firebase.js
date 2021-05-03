 const firebaseConfig = {
    apiKey: "AIzaSyBDj3n8HMMDbvbNzlaKLWsnV51d89qr9cM",
    authDomain: "disneyplus-clone-ef561.firebaseapp.com",
    projectId: "disneyplus-clone-ef561",
    storageBucket: "disneyplus-clone-ef561.appspot.com",
    messagingSenderId: "653947941006",
    appId: "1:653947941006:web:a215b4a86209d130e199df",
    measurementId: "G-P16M22M8DM"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();

  export { auth, provider, storage };
  export default db;