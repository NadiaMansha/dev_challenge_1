import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey:import.meta.env.apiKey,
    authDomain:import.meta.env.authDomain,
    projectId:import.meta.env.projectId,
    storageBucket:import.meta.env.storageBucket,
    messagingSenderId:import.meta.env.messagingSenderId,
    appId:import.meta.env.appId,
    measurementId:import.meta.env.measurementId
};
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const storage = getStorage();
