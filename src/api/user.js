import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase-config";
import { fakeMenu } from "../fakeData/fakeMenu";

export const getUser = async (idUser) => {
  const docRef = doc(db, "users", idUser);
  const docSnapshot = await getDoc(docRef);
  if (docSnapshot.exists) {
    const userReceived = docSnapshot.data();
    return userReceived;
  }
};

export const createUser = (idUser) => {
  // CACHETTE
  const docRef = doc(db, "users", idUser);

  // NOURRITURE
  const newDoc = {
    username: idUser,
    menu: fakeMenu.LARGE,
  };

  // setDoc(CACHETTE, NOURRITURE)
  setDoc(docRef, newDoc);
};
