// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrkv6a9UaXGA70LySop-Qq6dFGsJQcstQ",
  authDomain: "reclaim-convergent.firebaseapp.com",
  projectId: "reclaim-convergent",
  storageBucket: "reclaim-convergent.appspot.com",
  messagingSenderId: "770146423320",
  appId: "1:770146423320:web:760ec8b104c8001886296d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export { auth, app };
