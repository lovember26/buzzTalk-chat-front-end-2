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
  HomePage,
  ItemsPage,
  VerifyPage,
  ForgotPasswordPage,
  ResetPasswordPage,
} from "pages";
import { currentUserThunk } from "redux/auth/authThunk";
import { selectAccessToken } from "redux/auth/authSelectors";

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
          path={routes.HOME_PAGE}
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path={routes.ITEMS_PAGE}
          element={
            <PrivateRoute>
              <ItemsPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </>
  );
};
