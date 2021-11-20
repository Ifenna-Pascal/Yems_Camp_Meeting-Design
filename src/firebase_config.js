// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCRzQQaexo8xHGkUuPW5poVwc0qd7kVILM',
    authDomain: 'camp-meeting.firebaseapp.com',
    databaseURL: 'https://camp-meeting-default-rtdb.firebaseio.com',
    projectId: 'camp-meeting',
    storageBucket: 'camp-meeting.appspot.com',
    messagingSenderId: '852314059388',
    appId: '1:852314059388:web:b77911ea5314742e0e4ff9',
    measurementId: 'G-DFR1ESFNX2',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export const colRef = collection(db, 'members');
// get collection data;
export const getDocuments = () => {
    let books = [];
    getDocs(colRef)
        .then((snapshot) => {
            snapshot.docs.forEach((doc) => {
                books.push({ ...doc.data(), id: doc.id });
            });
        })
        .catch((err) => {
            return err;
        });
    return books;
};
