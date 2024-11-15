import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAtbS5vBCdIHdH80IbtI-Irg2t-shJHcvk",
  authDomain: "smart-eager.firebaseapp.com",
  databaseURL: "https://smart-eager-default-rtdb.firebaseio.com",
  projectId: "smart-eager",
  storageBucket: "smart-eager.firebasestorage.app",
  messagingSenderId: "567495606986",
  appId: "1:567495606986:web:2fa35a5913a6701066aa33",
  measurementId: "G-BMSDSPXLJZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database
const database = getDatabase(app);

export { database };
