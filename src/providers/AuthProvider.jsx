import PropTypes from "prop-types";
import AuthContext from "../context/AuthContext";
import { useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const githubLogin = () => {
    setLoading(true);
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

  const logoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setLoading(false);
        setUser(currentUser);
      } else {
        setLoading(false);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const userInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    githubLogin,
    logoutUser,
  };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = { children: PropTypes.node };

export default AuthProvider;
