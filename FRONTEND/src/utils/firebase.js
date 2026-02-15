import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMI-txIOHWxiLhUdsnjSZn_6qAlnNmU1M",
  authDomain: "examnotes-70748.firebaseapp.com",
  projectId: "examnotes-70748",
  storageBucket: "examnotes-70748.appspot.com",
  messagingSenderId: "YOUR_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
