import { Route, Routes } from "react-router-dom";
import { routes } from "../constants/routes";
import { AppBar } from "./AppBar/AppBar";
// import { WelcomePage } from "../pages/WelcomePage/WelcomePage";
// import { LoginPage } from "../pages/LoginPage/LoginPage";
// import { RegisterPage } from "../pages/RegisterPage/RegisterPage";
// import { HomePage } from "../pages/HomePage/HomePage";

import { WelcomePage, LoginPage, RegisterPage, HomePage } from "../pages";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute";

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path={routes.MAIN_PAGE} element={<WelcomePage />} />
        <Route path={routes.REGISTER_PAGE} element={<RegisterPage />} />
        <Route path={routes.LOGIN_PAGE} element={<LoginPage />} />
        <Route
          path={routes.HOME_PAGE}
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </>
  );
};
