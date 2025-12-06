import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";


// Optionally import the services that you want to use
// import {...} from 'firebase/auth';
// import {...} from 'firebase/database';
// import {...} from 'firebase/firestore';
// import {...} from 'firebase/functions';
// import {...} from 'firebase/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAzk6MMqzCWvuKE0GCGiBRF0vKtKnW36c8',
  authDomain: 'pract-9b12e.firebaseapp.com',
  databaseURL: 'https://pract-9b12e-default-rtdb.firebaseio.com',
  projectId: 'pract-9b12e',
  storageBucket: 'pract-9b12e.appspot.com',
  messagingSenderId: '872941127640',
  appId: '1:872941127640:android:de551da1fe8d3f113794ad',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase

export const db = getDatabase(app);