// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
// import { Firestore } from '@firebase/firestore';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyBThLwZKo26CLeFz-2OrepAnG6O0CR3ZCc',
    authDomain: 'yemscampregistration.firebaseapp.com',
    projectId: 'yemscampregistration',
    storageBucket: 'yemscampregistration.appspot.com',
    messagingSenderId: '370059311609',
    appId: '1:370059311609:web:d0701e41d4f5f8a30b2528',
    measurementId: 'G-X78KN1FN88',
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore();
export const colRef = collection(db, 'campMembers');
// const increment = Firestore.FieldValue.increment(1);
// colRef.update({ FieldToIncrease: increment });
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
