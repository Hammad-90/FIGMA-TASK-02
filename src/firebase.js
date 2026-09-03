import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQfkQo9Qn2zp560rNFx1sphMr-iA3IqZ4",
  authDomain: "fir-loginapp-1374f.firebaseapp.com",
  projectId: "fir-loginapp-1374f",
  storageBucket: "fir-loginapp-1374f.firebasestorage.app",
  messagingSenderId: "174222129821",
  appId: "1:174222129821:web:84f5f6839a59debce57274",
  measurementId: "G-2953DD338S"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);