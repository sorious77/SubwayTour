import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut as googleSignOut,
} from "firebase/auth";
import { getAuthUsers } from "./Firebase";

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const signIn = async (setUser) => {
  let curUser;

  await signInWithPopup(auth, provider)
    .then((result) => {
      curUser = result.user;
      console.log(result);
    })
    .catch((e) => {
      console.log(e);
    });

  let isValidUser = false;

  await getAuthUsers().then((users) => {
    console.log(users);

    users.forEach((user) => {
      if (curUser.email === user.data().email) {
        isValidUser = true;
        return;
      }
    });
  });

  if (isValidUser) {
    setUser(curUser);
  } else {
    alert("권한이 없습니다.");
  }
};

export const signOut = async (setUser) => {
  googleSignOut(auth)
    .then(() => {
      setUser(null);
      console.log("signOut Success!");
    })
    .catch((e) => {
      console.log("signOut failed");
    });
};
