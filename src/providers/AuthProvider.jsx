import PropTypes from "prop-types";
import AuthContext from "../context/AuthContext";
import { useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const userInfo = { user };

  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = { children: PropTypes.node };

export default AuthProvider;
