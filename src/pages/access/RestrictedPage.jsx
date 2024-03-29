import { Suspense } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { selectAccessToken } from "redux/auth/authSelectors";
import { routes } from "constants";

export default function RestrictedPage({
  component: Component,
  redirect = routes.RESTRICTED_PUBLIC_PAGE,
}) {
  const location = useLocation();
  const to = location.state?.from || redirect;
  const isAuthenticated = useSelector(selectAccessToken);

  return isAuthenticated ? (
    <Navigate to={to} state={{ from: location }} replace />
  ) : (
    <Suspense fallback={null}>{Component}</Suspense>
  );
}
