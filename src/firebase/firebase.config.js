// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDy2McnYjeRxDC5HRPJa4M39vH6iiLLNDU",
  authDomain: "mart-bd.firebaseapp.com",
  projectId: "mart-bd",
  storageBucket: "mart-bd.firebasestorage.app",
  messagingSenderId: "687487844844",
  appId: "1:687487844844:web:8eb2f42a8fa9405f5c80c9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Create Auth instance
export const auth = getAuth(app);

// Default export (optional)
export default app;
