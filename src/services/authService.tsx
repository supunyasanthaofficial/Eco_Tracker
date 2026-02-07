import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";

// new acc
export const signUp = async (email: string, pass: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, pass);
    return { success: true, user: res.user };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

// existing acc
export const login = async (email: string, pass: string) => {
  try {
    const res = await signInWithEmailAndPassword(auth, email, pass);
    return { success: true, user: res.user };
  } catch (error: any) {
    return { success: false, error: error.message };
  }
};

//  Log Out
export const logout = async () => {
  await signOut(auth);
};

