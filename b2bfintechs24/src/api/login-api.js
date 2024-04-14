import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const basicSignIn = (email, password, setLoggedIn, setErrorMessage) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      console.log(userCredential);
      setLoggedIn(true);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      setErrorMessage(errorMessage)
    });
};

export { basicSignIn };
