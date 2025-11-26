// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.PUBLIC_apiKey,
  authDomain: process.env.PUBLIC_authDomain,
  projectId: process.env.PUBLIC_projectId,
  storageBucket: process.env.PUBLIC_storageBucket,
  messagingSenderId: process.env.PUBLIC_messagingSenderId,
  appId:process.env.PUBLIC_appId,
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);