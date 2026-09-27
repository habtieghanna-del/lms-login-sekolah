import { Navigate, useLocation, useParams } from "react-router-dom";
import { getSession } from "../auth";

/**
 * Wrap a dashboard route with this to require a logged-in session.
 * Pass `roleId` for routes with a fixed role (e.g. /dashboard/admin/*);
 * for the generic `/dashboard/:roleId` route it falls back to the URL
 * param, so a logged-in guru can't open /dashboard/admin by editing the URL.
 */
export default function ProtectedRoute({ roleId, children }) {
  const location = useLocation();
  const params = useParams();
  const session = getSession();
  const requiredRole = roleId ?? params.roleId;

  if (!session) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  if (requiredRole && session.roleId !== requiredRole) {
    return <Navigate to="/" replace state={{ from: location }} />;
  }
  return children;
}
