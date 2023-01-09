// Routing
import { Outlet, Navigate } from "react-router-dom";

const ProtectedFromAdmin = () => {
  return localStorage.getItem("token") ? <Navigate to="/admin" /> : <Outlet />;
};

export default ProtectedFromAdmin;
