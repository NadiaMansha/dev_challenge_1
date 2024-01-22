import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";



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
