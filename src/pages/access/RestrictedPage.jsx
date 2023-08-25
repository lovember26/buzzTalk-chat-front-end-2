import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { selectAccessToken } from "redux/auth/authSelectors";

export default function RestrictedPage({
  component: Component,
  redirect = "/chat-rooms/friends",
}) {
  const location = useLocation();
  const to = location.state?.from || redirect;
  const isAuthenticated = useSelector(selectAccessToken);

  return isAuthenticated ? (
    <Navigate to={to} state={{ from: location }} replace />
  ) : (
    Component
  );
}
