import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import auth from "../../config/firebase";
  
  export const AuthContext = createContext(null);
  
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
  
    const logOut = () => {
      setLoading(true);
      return signOut(auth);
    };
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);
  
    const authValue = {
      createUser,
      user,
      loginUser,
      logOut,
      loading,
    };
  
    return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>;
  };
  
  export default AuthProvider;