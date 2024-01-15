//initialisation de firebase
import admin from 'firebase-admin';
import serviceAccount from './firebase-key.json' assert { type: "json" };  

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  projectId: 'fern-book-db2'
});

const firestore = admin.firestore();

export { admin, firestore };