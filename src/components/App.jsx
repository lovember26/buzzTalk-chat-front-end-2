import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { routes } from "constants/routes";
import { Layout } from "components/Layout/Layout";

import PrivatePage from "pages/access/PrivatePage";
import RestrictedPage from "pages/access/RestrictedPage";

import {
  MainPage,
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
      <Routes>
        <Route path={routes.MAIN_PAGE} element={<Layout />}>
          <Route index element={<RestrictedPage component={<MainPage />} />} />
          <Route
            path={routes.REGISTER_PAGE}
            element={<RestrictedPage component={<RegisterPage />} />}
          />
          <Route
            path={routes.VERIFY_PAGE}
            element={<RestrictedPage component={<VerifyPage />} />}
          />
          <Route
            path={routes.LOGIN_PAGE}
            element={<RestrictedPage component={<LoginPage />} />}
          />
          <Route
            path={routes.FORGOT_PASSWORD_PAGE}
            element={<RestrictedPage component={<ForgotPasswordPage />} />}
          />
          <Route
            path={routes.RESET_PASSSWORD_PAGE}
            element={<RestrictedPage component={<ResetPasswordPage />} />}
          />
        </Route>

        <Route
          path={routes.CHAT_ROOMS_PAGE}
          element={<PrivatePage component={<ChatRoomsPage />} />}
        >
          <Route
            path={routes.CHAT_ROOMS_FRIENDS_PAGE}
            element={<PrivatePage component={<FriendsBar />} />}
          >
            <Route
              path={routes.FRIENDS_ALL_PAGE}
              element={<PrivatePage component={<AllFriends />} />}
            />
            <Route
              path={routes.FRIENDS_ONLINE_PAGE}
              element={<PrivatePage component={<OnlineFriends />} />}
            />
            <Route
              path={routes.FRIENDS_BLOCKED_PAGE}
              element={<PrivatePage component={<BlockedUsers />} />}
            />
            <Route
              path={routes.ADD_FRIENDS_PAGE}
              element={<PrivatePage component={<AddFriend />} />}
            />
          </Route>
        </Route>

        <Route
          path={routes.PROFILE_PAGE}
          element={<PrivatePage component={<ProfilePage />} />}
        />
        <Route
          path={routes.EDIT_PROFILE_PAGE}
          element={<PrivatePage component={<EditProfilePage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
