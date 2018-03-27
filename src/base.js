import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    // Initialize Firebase
    
    apiKey: "AIzaSyCSIcrBZS3yR90hjQxt2OrKT37iY8CRSBs",
    authDomain: "catch-of-the-day-jw-d165f.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-jw-d165f.firebaseio.com"
    
});

const base = Rebase.createClass(firebaseApp.database());
//this is a named export
export {firebaseApp};

//this is a default export
export default base;