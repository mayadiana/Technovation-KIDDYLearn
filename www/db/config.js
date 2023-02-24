// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
import "https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js";
import "https://www.gstatic.com/firebasejs/8.0.0/firebase-analytics.js";
import "https://www.gstatic.com/firebasejs/8.0.0/firebase-auth.js";
import "https://www.gstatic.com/firebasejs/8.0.0/firebase-storage.js";
import "https://www.gstatic.com/firebasejs/8.0.0/firebase-firestore.js";
import "https://www.gstatic.com/firebasejs/8.0.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyBbKUyVjxshmkFPr2jjdfAMC1vvi5oufQg",
    authDomain: "com.technovation.lilmeerkats",
    databaseURL: "https://console.firebase.google.com/u/0/project/lil-meerkats/database",
    projectId: "lil-meerkats",
    storageBucket: "https://console.firebase.google.com/u/0/project/lil-meerkats/storage",
    messagingSenderId: "931282143603",
    appId: "1: 931282143603: android: 86088e424c8eedd7e59d06",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;