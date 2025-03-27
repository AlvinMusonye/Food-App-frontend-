import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

const ProtectedRoute = ({ allowedRoles }) => {
  const { user } = useAuth();

  console.log("ProtectedRoute - Current User:", user); // DEBUGGING LOG

  if (!user || !allowedRoles.includes(user.role)) {
    console.log("Unauthorized Access - Redirecting to /unauthorized");
    return <Navigate to="/unauthorized" />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
