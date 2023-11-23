// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBiw3TRhNvodbShK3pUCFguob6tGNROVvo",
  authDomain: "mobile-otp-app-4b8fe.firebaseapp.com",
  projectId: "mobile-otp-app-4b8fe",
  storageBucket: "mobile-otp-app-4b8fe.appspot.com",
  messagingSenderId: "133270287273",
  appId: "1:133270287273:web:eb77044484cfe21ed50ab8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
