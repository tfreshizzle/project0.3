// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4VNgT9Fasd_67ihlKucrbUoNFbZkDSOc",
  authDomain: "herocare-e3f95.firebaseapp.com",
  projectId: "herocare-e3f95",
  storageBucket: "herocare-e3f95.appspot.com",
  messagingSenderId: "975960241571",
  appId: "1:975960241571:web:6d98d7e2d3ef7df2121616",
  measurementId: "G-0BPPCNK859"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);