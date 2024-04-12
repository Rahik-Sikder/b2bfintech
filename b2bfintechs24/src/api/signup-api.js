import { auth } from "./firebase";
import { updateProfile } from "firebase/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";

const basicSignUp = (
  displayName,
  email,
  password,
  setLoggedIn,
  setErrorMessage
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;

      updateProfile(auth.currentUser, {
        displayName: displayName,
      });

      console.log(`Signed Up ${user}`);
      setLoggedIn(true);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      setErrorMessage(errorMessage);
    });
};

export { basicSignUp };
