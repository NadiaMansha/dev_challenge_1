import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


// VITE_API_KEY=AIzaSyC3okB7LzHyf8KTIo0AWwJNgVp-2TT9YTQ
// VITE_AUTH_DOMAIN=doctor-hunt-8afcb.firebaseapp.com
// VITE_PROJECT_ID=doctor-hunt-8afcb
// VITE_STORAGE_BUCKET=doctor-hunt-8afcb.appspot.com
// VITE_MASSENGER_ID=406218944411
// VITE_APP_ID=1406218944411:web:0f52289dd16293835d7b3e
// VITE_MEASURMENT_ID=G-SCBL87PNBB


const firebaseConfig = {
    apiKey:import.meta.env.VITE_API_KEY,
    authDomain:import.meta.env.VITE_AUTH_DOMAIN,
    projectId:import.meta.env.VITE_PROJECT_ID,
    storageBucket:import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId:import.meta.env.VITE_MASSENGER_ID,
    appId:import.meta.env.VITE_APP_ID,
    measurementId:import.meta.env.VITE_MEASURMENT_ID
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage();
