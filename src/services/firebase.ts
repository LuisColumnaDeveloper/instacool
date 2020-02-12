import firebase from 'firebase'

var firebaseConfig = {
    apiKey: "AIzaSyB1uIboK4ltSq3PGHnjrYRIp3Q_8np6Ry4",
    authDomain: "instacool-e5b8a.firebaseapp.com",
    databaseURL: "https://instacool-e5b8a.firebaseio.com",
    projectId: "instacool-e5b8a",
    storageBucket: "instacool-e5b8a.appspot.com",
    messagingSenderId: "357170323997",
    appId: "1:357170323997:web:2bca6c2882a2cbf1175cf4",
    measurementId: "G-ZKEDBYQL2F"
  }

  firebase.initializeApp(firebaseConfig)

  export const auth     = firebase.auth()
  export const db       = firebase.firestore()
  export const storage  = firebase.storage()