import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { routes } from "constants/routes";
import { Layout } from "components/Layout/Layout";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

import PrivatePage from "pages/access/PrivatePage";

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
          <Route index element={<MainPage />} />
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
        </Route>

        <Route
          path={routes.CHAT_ROOMS_PAGE}
          element={
            <PrivatePage>
              <ChatRoomsPage />
            </PrivatePage>
          }
        >
          <Route
            path={routes.CHAT_ROOMS_FRIENDS_PAGE}
            element={
              <PrivatePage>
                <FriendsBar />
              </PrivatePage>
            }
          >
            <Route
              path={routes.FRIENDS_ALL_PAGE}
              element={
                <PrivatePage>
                  <AllFriends />
                </PrivatePage>
              }
            />
            <Route
              path={routes.FRIENDS_ONLINE_PAGE}
              element={
                <PrivatePage>
                  <OnlineFriends />
                </PrivatePage>
              }
            />
            <Route
              path={routes.FRIENDS_BLOCKED_PAGE}
              element={<BlockedUsers />}
            />
            <Route
              path={routes.ADD_FRIENDS_PAGE}
              element={
                <PrivatePage>
                  <AddFriend />
                </PrivatePage>
              }
            />
          </Route>
        </Route>
        <Route
          path={routes.PROFILE_PAGE}
          element={
            <PrivatePage>
              <ProfilePage />
            </PrivatePage>
          }
        />
        <Route
          path={routes.EDIT_PROFILE_PAGE}
          element={
            <PrivatePage>
              <EditProfilePage />
            </PrivatePage>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

// import { useEffect } from "react";
// import { Route, Routes } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { routes } from "constants/routes";
// import { Layout } from "components/Layout/Layout";
// import { PrivateRoute } from "./PrivateRoute/PrivateRoute";
// import {
//   MainPage,
//   LoginPage,
//   RegisterPage,
//   ChatRoomsPage,
//   VerifyPage,
//   ForgotPasswordPage,
//   ResetPasswordPage,
//   ProfilePage,
//   EditProfilePage,
//   NotFoundPage,
// } from "pages";
// import { currentUserThunk } from "redux/auth/authThunk";
// import { selectAccessToken } from "redux/auth/authSelectors";
// import { FriendsBar } from "./ChatRooms/FriendsBar/FriendsBar";
// import { AddFriend } from "./ChatRooms/FriendsBar/AddFriend.jsx/AddFriend";
// import { AllFriends } from "./ChatRooms/FriendsBar/AllFriends/AllFriends";
// import { OnlineFriends } from "./ChatRooms/FriendsBar/OnlineFriends/OnlineFriends";
// import { BlockedUsers } from "./ChatRooms/FriendsBar/BlockedUsers/BlockedUsers";

// export const App = () => {
//   const dispatch = useDispatch();
//   const accessToken = useSelector(selectAccessToken);

//   useEffect(() => {
//     if (accessToken) {
//       dispatch(currentUserThunk());
//     }
//   }, [dispatch, accessToken]);

//   return (
//     <>
//       <Layout />
//       <Routes>
//         <Route path={routes.MAIN_PAGE} element={<MainPage />} />
//         <Route path={routes.REGISTER_PAGE} element={<RegisterPage />} />
//         <Route path={routes.VERIFY_PAGE} element={<VerifyPage />} />
//         <Route path={routes.LOGIN_PAGE} element={<LoginPage />} />
//         <Route
//           path={routes.FORGOT_PASSWORD_PAGE}
//           element={<ForgotPasswordPage />}
//         />

//         <Route
//           path={routes.RESET_PASSSWORD_PAGE}
//           element={<ResetPasswordPage />}
//         />

//         <Route
//           path={routes.CHAT_ROOMS_PAGE}
//           element={
//             <PrivateRoute>
//               <ChatRoomsPage />
//             </PrivateRoute>
//           }
//         >
//           <Route path="friends" element={<FriendsBar />}>
//             <Route path="all" element={<AllFriends />} />
//             <Route path="online" element={<OnlineFriends />} />
//             <Route path="blocked" element={<BlockedUsers />} />
//             <Route path="add-friend" element={<AddFriend />} />
//           </Route>
//         </Route>

//         <Route
//           path={routes.PROFILE_PAGE}
//           element={
//             <PrivateRoute>
//               <ProfilePage />
//             </PrivateRoute>
//           }
//         />

//         <Route
//           path={routes.EDIT_PROFILE_PAGE}
//           element={
//             <PrivateRoute>
//               <EditProfilePage />
//             </PrivateRoute>
//           }
//         />

//         {/* <Route
//           path={routes.PROFILE_PAGE}
//           element={
//             <PrivateRoute>
//               <ProfilePage />
//             </PrivateRoute>
//           }
//         >
//           <Route
//             path={routes.EDIT_PROFILE_PAGE}
//             element={<EditProfilePage />}
//           />
//         </Route> */}

//         <Route path="*" element={<NotFoundPage />} />
//       </Routes>
//     </>
//   );
// };
