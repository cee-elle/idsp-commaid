import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"
import "firebase/storage"



    const config = {
        apiKey: "AIzaSyBVR6nwfbj5Vkcd1DrglV99meKci79ppaw",
        authDomain: "commaid-idsp.firebaseapp.com",
        databaseURL: "https://commaid-idsp.firebaseio.com",
        projectId: "commaid-idsp",
        storageBucket: "commaid-idsp.appspot.com",
        messagingSenderId: "1026197802628",
        appId: "1:1026197802628:web:15f8c1278de0aaf2fe3cd1",
        measurementId: "G-E7NVJB7GWS"
    }
    
    const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();


export const auth = app.auth();
export const db = app.firestore();
export const fileStorage = app.storage();


export default app
