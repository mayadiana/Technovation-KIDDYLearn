// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
import { initializeApp } from 'firebase/app';
import { initializeAuth } from 'firebase/auth';
import 'Firebase/auth';

const firebaseCredentials = {
    apiKey: "AIzaSyBbKUyVjxshmkFPr2jjdfAMC1vvi5oufQg",
    authDomain: "com.technovation.lilmeerkats",
    databaseURL: "https://console.firebase.google.com/u/0/project/lil-meerkats/database",
    projectId: "lil-meerkats",
    storageBucket: "https://console.firebase.google.com/u/0/project/lil-meerkats/storage",
    messagingSenderId: "931282143603",
    appId: "1: 931282143603: android: 86088e424c8eedd7e59d06",
    automaticDataCollectionEnabled: false,  // disable GDPR
};

// Initialize Firebase
export const app = initializeApp(firebaseCredentials);
export const auth = initializeAuth(app);
