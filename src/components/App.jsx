import { lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { currentUserThunk } from "redux/auth/authThunk";
import { selectAccessToken } from "redux/auth/authSelectors";
import {
  selectIsFetchingCurrentUser,
  selectUserName,
} from "redux/user/userSelectors";
import { routes } from "constants/routes";

import PrivatePage from "pages/access/PrivatePage";
import RestrictedPage from "pages/access/RestrictedPage";

import Layout from "./Layout/Layout";
import { Loader } from "./common/Loader/Loader";

// For dynamically importing a module
const MainPage = lazy(() => import("pages/MainPage"));
const LoginPage = lazy(() => import("pages/LoginPage"));
const RegisterPage = lazy(() => import("pages/RegisterPage"));
const ChatRoomsPage = lazy(() => import("pages/ChatRoomsPage"));
const VerifyPage = lazy(() => import("pages/VerifyPage"));
const ForgotPasswordPage = lazy(() => import("pages/ForgotPasswordPage"));
const ResetPasswordPage = lazy(() => import("pages/ResetPasswordPage"));
const ProfilePage = lazy(() => import("pages/ProfilePage"));
const EditProfilePage = lazy(() => import("pages/EditProfilePage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

const FriendsBar = lazy(() => import("./ChatRooms/FriendsBar/FriendsBar"));
const AddFriend = lazy(() => import("./ChatRooms/FriendsBar/AddFriend"));
const AllFriends = lazy(() => import("./ChatRooms/FriendsBar/AllFriends"));
const BlockedUsers = lazy(() => import("./ChatRooms/FriendsBar/BlockedUsers"));
const OnlineFriends = lazy(() =>
  import("./ChatRooms/FriendsBar/OnlineFriends")
);

const ChatRoom = lazy(() => import("./ChatRooms/ChatRoom/ChatRoom"));
const Chat = lazy(() => import("./ChatRooms/Chat/Chat"));
// const WelcomeChat = lazy(() => import("./ChatRooms/WelcomeChat/WelcomeChat"));

export const App = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(selectAccessToken);
  const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);
  const username = useSelector(selectUserName);

  useEffect(() => {
    if (accessToken) {
      dispatch(currentUserThunk());
    }
  }, [dispatch, accessToken]);

  return isFetchingCurrentUser ? (
    <Loader />
  ) : (
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
          {/* <Route
            index
            element={<PrivatePage component={<AllFriends />} />}
          /> */}
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

        <Route
          path={routes.CHAT_ROOMS_CHAT_PAGE}
          element={<PrivatePage component={<ChatRoom />} />}
        >
          {/* <Route index element={<PrivatePage component={<WelcomeChat />} />} /> */}
          <Route
            path={routes.CHAT_ROOMS_PRIVATE_CHAT_PAGE}
            element={
              <PrivatePage
                component={
                  <Chat username={username} accessToken={accessToken} />
                }
              />
            }
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
  );
};

// The old code
// import { lazy, useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { currentUserThunk } from "redux/auth/authThunk";
// import { selectAccessToken } from "redux/auth/authSelectors";
// import { selectIsFetchingCurrentUser } from "redux/user/userSelectors";
// import { routes } from "constants/routes";

// import PrivatePage from "pages/access/PrivatePage";
// import RestrictedPage from "pages/access/RestrictedPage";

// import Layout from "./Layout/Layout";
// import { Loader } from "./common/Loader/Loader";

// // For dynamically importing a module
// const MainPage = lazy(() => import("pages/MainPage"));
// const LoginPage = lazy(() => import("pages/LoginPage"));
// const RegisterPage = lazy(() => import("pages/RegisterPage"));
// const ChatRoomsPage = lazy(() => import("pages/ChatRoomsPage"));
// const VerifyPage = lazy(() => import("pages/VerifyPage"));
// const ForgotPasswordPage = lazy(() => import("pages/ForgotPasswordPage"));
// const ResetPasswordPage = lazy(() => import("pages/ResetPasswordPage"));
// const ProfilePage = lazy(() => import("pages/ProfilePage"));
// const EditProfilePage = lazy(() => import("pages/EditProfilePage"));
// const NotFoundPage = lazy(() => import("pages/NotFoundPage"));

// const FriendsBar = lazy(() => import("./ChatRooms/FriendsBar/FriendsBar"));
// const AddFriend = lazy(() => import("./ChatRooms/FriendsBar/AddFriend"));
// const AllFriends = lazy(() => import("./ChatRooms/FriendsBar/AllFriends"));
// const BlockedUsers = lazy(() => import("./ChatRooms/FriendsBar/BlockedUsers"));
// const OnlineFriends = lazy(() =>
//   import("./ChatRooms/FriendsBar/OnlineFriends")
// );

// const Chat = lazy(() => import("./ChatRooms/Chat/Chat"));
// export const App = () => {
//   const dispatch = useDispatch();
//   const accessToken = useSelector(selectAccessToken);
//   const isFetchingCurrentUser = useSelector(selectIsFetchingCurrentUser);

//   useEffect(() => {
//     if (accessToken) {
//       dispatch(currentUserThunk());
//     }
//   }, [dispatch, accessToken]);

//   return isFetchingCurrentUser ? (
//     <Loader />
//   ) : (
//     <Routes>
//       <Route path={routes.MAIN_PAGE} element={<Layout />}>
//         <Route index element={<RestrictedPage component={<MainPage />} />} />
//         <Route
//           path={routes.REGISTER_PAGE}
//           element={<RestrictedPage component={<RegisterPage />} />}
//         />
//         <Route
//           path={routes.VERIFY_PAGE}
//           element={<RestrictedPage component={<VerifyPage />} />}
//         />
//         <Route
//           path={routes.LOGIN_PAGE}
//           element={<RestrictedPage component={<LoginPage />} />}
//         />
//         <Route
//           path={routes.FORGOT_PASSWORD_PAGE}
//           element={<RestrictedPage component={<ForgotPasswordPage />} />}
//         />
//         <Route
//           path={routes.RESET_PASSSWORD_PAGE}
//           element={<RestrictedPage component={<ResetPasswordPage />} />}
//         />
//         </Route>

//       <Route
//         path={routes.CHAT_ROOMS_PAGE}
//         element={<PrivatePage component={<ChatRoomsPage />} />}
//       >
//         <Route
//           path={routes.CHAT_ROOMS_FRIENDS_PAGE}
//           element={<PrivatePage component={<FriendsBar />} />}
//         >
//           <Route
//             path={routes.FRIENDS_ALL_PAGE}
//             element={<PrivatePage component={<AllFriends />} />}
//           />
//           <Route
//             path={routes.FRIENDS_ONLINE_PAGE}
//             element={<PrivatePage component={<OnlineFriends />} />}
//           />
//           <Route
//             path={routes.FRIENDS_BLOCKED_PAGE}
//             element={<PrivatePage component={<BlockedUsers />} />}
//           />
//           <Route
//             path={routes.ADD_FRIENDS_PAGE}
//             element={<PrivatePage component={<AddFriend />} />}
//           />
//         </Route>

//         <Route path="chats" element={<PrivatePage component={<Chat />} />} />
//         <Route
//           path="chats/:username"
//           element={<PrivatePage component={<Chat />} />}
//         />
//       </Route>

//       <Route
//         path={routes.PROFILE_PAGE}
//         element={<PrivatePage component={<ProfilePage />} />}
//       />
//       <Route
//         path={routes.EDIT_PROFILE_PAGE}
//         element={<PrivatePage component={<EditProfilePage />} />}
//       />
//       <Route path="*" element={<NotFoundPage />} />
//     </Routes>
//   );
// };
