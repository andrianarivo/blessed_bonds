import { useAuth } from "@/hooks/use-auth";
import { Navigate, Outlet } from "react-router";

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
}