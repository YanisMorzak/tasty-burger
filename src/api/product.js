import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";

export const syncBothMenu = (userId, menuUpdated) => {
  const docRef = doc(db, "users", userId);

  const docUpdated = {
    username: userId,
    menu: menuUpdated,
  };

  setDoc(docRef, docUpdated);
};

export const getMenu = async (idUser) => {
  const docRef = doc(db, "users", idUser);

  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists) {
    const menuReceived = docSnapshot.data();
    return menuReceived.menu;
  }
};
