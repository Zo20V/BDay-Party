// Firebase connection for the party site. These values are public by design;
// what guests may change is controlled by firestore.rules in the Firebase console.
window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAcMWAjBJUDA_rwk5CkNNPf-MCYUgwo-7Q",
  authDomain: "bday-jet-3c7d3.firebaseapp.com",
  projectId: "bday-jet-3c7d3",
  storageBucket: "bday-jet-3c7d3.firebasestorage.app",
  messagingSenderId: "169299104698",
  appId: "1:169299104698:web:2088f44b17ec8942738383"
};

// Emails of the admin logins created under Firebase Authentication.
// Keep this list in sync with the list in firestore.rules.
window.ADMIN_EMAILS = ["vzsonyi.zoltan@gmail.com", "annaburka25@gmail.com"];
