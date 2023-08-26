import { Suspense } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { selectAccessToken } from "redux/auth/authSelectors";
import { routes } from "constants";

export default function PrivatePage({
  component: Component,
  redirect = routes.MAIN_PAGE,
}) {
  const location = useLocation();
  const token = useSelector(selectAccessToken);

  if (!token) {
    return <Navigate to={redirect} state={{ from: location }} />;
  }

  return <Suspense fallback={null}>{Component}</Suspense>;
}
