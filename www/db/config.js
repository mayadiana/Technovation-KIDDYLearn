// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
import "https://www.gstatic.com/firebasejs/8.0.0/firebase-app.js";
import "https://www.gstatic.com/firebasejs/8.0.0/firebase-analytics.js";
import "https://www.gstatic.com/firebasejs/8.0.0/firebase-auth.js";
import "https://www.gstatic.com/firebasejs/8.0.0/firebase-storage.js";
import "https://www.gstatic.com/firebasejs/8.0.0/firebase-firestore.js";
import "https://www.gstatic.com/firebasejs/8.0.0/firebase-database.js";

// To be modified with specific project internal namings
const firebaseConfig = {
    apiKey: "",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DATABASE_URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "SENDER_ID",
    appId: "APP_ID",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// update firestore settings
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
