import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenu = (userId, menuUpdated) => {
  const docRef = doc(db, "users", userId);

  const docUpdated = {
    username: userId,
    menu: menuUpdated,
  };

  setDoc(docRef, docUpdated);
};
