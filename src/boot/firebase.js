import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

console.log(process.env.FIREBASE_CONFIG, `: firebaseConfig, process.env.FIREBASE_CONFIG`)

const firebaseConfig = JSON.parse(process.env.FIREBASE_CONFIG)

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app);
