import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

const config = 'eyJhcGlLZXkiOiJBSXphU3lDOEtKcVBLQU05eTIweGV3dkhPcDZZSW9YcS0yckNEMTAiLCJhdXRoRG9tYWluIjoicHVsbHNvLWdpdGh1Yi5maXJlYmFzZWFwcC5jb20iLCJwcm9qZWN0SWQiOiJwdWxsc28tZ2l0aHViIiwic3RvcmFnZUJ1Y2tldCI6InB1bGxzby1naXRodWIuYXBwc3BvdC5jb20iLCJtZXNzYWdpbmdTZW5kZXJJZCI6IjQ0NjQ2NTc0MDE0NCIsImFwcElkIjoiMTo0NDY0NjU3NDAxNDQ6d2ViOmI0ZTY1YTM3MGZjYzU2NTZkMDUzYjUiLCJtZWFzdXJlbWVudElkIjoiRy1TV1JESlJYTEowIn0='

const firebaseConfig = JSON.parse(atob(config))

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const db = getFirestore(app);
