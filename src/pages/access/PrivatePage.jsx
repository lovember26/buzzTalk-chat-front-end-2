import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { selectAccessToken } from "redux/auth/authSelectors";

export default function PrivatePage({ children }) {
  const location = useLocation();
  const token = useSelector(selectAccessToken);
  // const auth = false;

  //   const isRefreshing = useSelector(selectIsRefreshing);
  //   const shouldRedirect = !isRefreshing && !token;

  //   return shouldRedirect ? (
  //     <Navigate to={redirect} state={{ from: location }} replace />
  //   ) : (
  //     Component
  //   );

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
