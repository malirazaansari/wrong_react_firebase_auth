import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: process.env.REACT_AAPP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_AAPP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_AAPP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_AAPP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_AAPP_FIREBASE_MESSAGING_SENDERID,
  appId: process.env.REACT_AAPP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_AAPP_FIREBASE_MEASUREMENT_ID,
});

export const auth = getAuth(app);

// const firestore = getFirestore(app);

// export { auth, firestore };
// export const auth = app.auth();
export default app;
