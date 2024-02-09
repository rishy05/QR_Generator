import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyBdhVuRU-0VjHzyNgsm-3bJDB0ofsakhN0",
  authDomain: "qr-gen-26ba1.firebaseapp.com",
  projectId: "qr-gen-26ba1",
  storageBucket: "qr-gen-26ba1.appspot.com",
  messagingSenderId: "1016045391489",
  appId: "1:1016045391489:web:20e9e7ebc02d5f9ddfc780",
  measurementId: "G-8GKR9VEYLN"
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);