import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { routes } from "constants/routes";
import { AppBar } from "components/AppBar/AppBar";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
import {
  WelcomePage,
  LoginPage,
  RegisterPage,
  ChatRoomsPage,
  VerifyPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ProfilePage,
  EditProfilePage,
  NotFoundPage,
} from "pages";
import { currentUserThunk } from "redux/auth/authThunk";
import { selectAccessToken } from "redux/auth/authSelectors";
import { FriendsBar } from "./ChatRooms/FriendsBar/FriendsBar";
import { AddFriend } from "./ChatRooms/FriendsBar/AddFriend.jsx/AddFriend";
import { AllFriends } from "./ChatRooms/FriendsBar/AllFriends/AllFriends";
import { OnlineFriends } from "./ChatRooms/FriendsBar/OnlineFriends/OnlineFriends";
import { BlockedUsers } from "./ChatRooms/FriendsBar/BlockedUsers/BlockedUsers";

export const App = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);

  useEffect(() => {
    if (accessToken) {
      dispatch(currentUserThunk());
    }
  }, [dispatch, accessToken]);

  return (
    <>
      <AppBar />
      <Routes>
        <Route path={routes.MAIN_PAGE} element={<WelcomePage />} />
        <Route path={routes.REGISTER_PAGE} element={<RegisterPage />} />
        <Route path={routes.VERIFY_PAGE} element={<VerifyPage />} />
        <Route path={routes.LOGIN_PAGE} element={<LoginPage />} />
        <Route
          path={routes.FORGOT_PASSWORD_PAGE}
          element={<ForgotPasswordPage />}
        />

        <Route
          path={routes.RESET_PASSSWORD_PAGE}
          element={<ResetPasswordPage />}
        />

        <Route
          path={routes.CHAT_ROOMS_PAGE}
          element={
            <PrivateRoute>
              <ChatRoomsPage />
            </PrivateRoute>
          }
        >
          <Route path="friends" element={<FriendsBar />}>
            <Route path="all" element={<AllFriends />} />
            <Route path="online" element={<OnlineFriends />} />
            <Route path="blocked" element={<BlockedUsers />} />
            <Route path="add-friend" element={<AddFriend />} />
          </Route>
        </Route>

        <Route
          path={routes.PROFILE_PAGE}
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        />

        <Route
          path={routes.EDIT_PROFILE_PAGE}
          element={
            <PrivateRoute>
              <EditProfilePage />
            </PrivateRoute>
          }
        />

        {/* <Route
          path={routes.PROFILE_PAGE}
          element={
            <PrivateRoute>
              <ProfilePage />
            </PrivateRoute>
          }
        >
          <Route
            path={routes.EDIT_PROFILE_PAGE}
            element={<EditProfilePage />}
          />
        </Route> */}

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
