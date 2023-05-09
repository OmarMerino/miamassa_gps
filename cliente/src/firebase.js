import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbBRgg0pCuZ9bv29qmit1-TW2h1FuUj0E",
  authDomain: "miamassapizzeria-1abd7.firebaseapp.com",
  databaseURL: "https://miamassapizzeria-1abd7-default-rtdb.firebaseio.com",
  projectId: "miamassapizzeria-1abd7",
  storageBucket: "miamassapizzeria-1abd7.appspot.com",
  messagingSenderId: "483013686882",
  appId: "1:483013686882:web:b45a95086711db3648433b",
  measurementId: "G-MV02YWYCWM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
