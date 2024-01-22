import { db } from "./firebase";
import { storage } from "./firebase";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { uuidv4 } from "@firebase/util";

export const uploadFile = async (imageUpload) => {
  if (imageUpload === null) {
    alert("Please select an image");
    return null;
  }

  try {
    const imageRef = storageRef(storage, `images/${uuidv4()}`);
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  } catch (error) {
    alert(error.message);
    return null;
  }
};
