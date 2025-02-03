/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";

function Protected({ children }) {
  const isLoggedIn = localStorage.getItem("token");

  if (isLoggedIn) return <>{children}</>;

  return <Navigate to={"/login"} />;
}

export default Protected;
