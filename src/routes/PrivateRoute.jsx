import PropTypes from "prop-types";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) return <LoadingSpinner />;
  if (user) return children;

  return <Navigate state={location.pathname} to="/login" />;
};

PrivateRoute.propTypes = { children: PropTypes.node };

export default PrivateRoute;
