import firebase from 'firebase/app'
import 'firebase/firestorage';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBuukp6i_KJtCy34-niWBJzAt_BCsImKE8",
    authDomain: "sonder-e7919.firebaseapp.com",
    projectId: "sonder-e7919",
    storageBucket: "sonder-e7919.appspot.com",
    messagingSenderId: "1088857443108",
    appId: "1:1088857443108:web:b40d0dcdbbe0d5194b01b1",
    measurementId: "G-VQ5Q5EDY4C"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const firestore = firebase.firestore()
export const storage = firebase.storage()