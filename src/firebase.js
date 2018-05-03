import {initializeApp} from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyC6C6gWxw8AwZaFZmrXZv6Ejy4sWu6dv4k",
  authDomain: "stubu-2018.firebaseapp.com",
  databaseURL: "https://stubu-2018.firebaseio.com",
  projectId: "stubu-2018",
  storageBucket: "stubu-2018.appspot.com",
  messagingSenderId: "517232906173"
  });

  export const db = app.database();
  export const usersRef = db.ref('users');