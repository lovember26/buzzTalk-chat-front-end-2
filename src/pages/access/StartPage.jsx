import { Suspense } from "react";
import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";
import { selectAccessToken } from "redux/auth/authSelectors";
import { routes } from "constants";
import { selectFetchAllPrivateChats, selectFetchAllPublicChats } from "redux/chat/chatSelectors";

export default function StartPage({
  component: Component,
  redirect = routes.MAIN_PAGE,
}) {
  const location = useLocation();

const publicChats=useSelector(selectFetchAllPublicChats);
const privateChats=useSelector(selectFetchAllPrivateChats);

  if (privateChats) {
    return <Navigate to={redirect} state={{ from: location }} />;
  }

  return <Suspense fallback={null}>{Component}</Suspense>;
}
