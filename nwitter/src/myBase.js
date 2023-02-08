import * as firebase from "firebase/app"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBZYU37gB4lTyQFQcibTt_yS-b1piKZTXI",
    authDomain: "nwitter-81cfe.firebaseapp.com",
    projectId: "nwitter-81cfe",
    storageBucket: "nwitter-81cfe.appspot.com",
    messagingSenderId: "71708533393",
    appId: "1:71708533393:web:1a454350da326c86695530"
  };

// export default  firebase.initializeApp(firebaseConfig)

firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();