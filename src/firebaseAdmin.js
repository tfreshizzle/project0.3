// src/firebaseAdmin.js
import admin from 'firebase-admin';
import serviceAccount from './serviceAccountKey.json';

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://herocare-e3f95.firebaseio.com'
});

export default admin;
