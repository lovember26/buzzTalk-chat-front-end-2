import { Route, Routes } from "react-router-dom";
import { routes } from "constants/routes";
import { AppBar } from "components/AppBar/AppBar";

import {
  WelcomePage,
  LoginPage,
  RegisterPage,
  HomePage,
  ItemsPage,
} from "pages";

export const App = () => {
  return (
    <>
      <AppBar />
      <Routes>
        <Route path={routes.MAIN_PAGE} element={<WelcomePage />} />
        <Route path={routes.REGISTER_PAGE} element={<RegisterPage />} />
        <Route path={routes.LOGIN_PAGE} element={<LoginPage />} />
        <Route path={routes.HOME_PAGE} element={<HomePage />} />
        <Route path={routes.ITEMS_PAGE} element={<ItemsPage />} />
        <Route path="*" element={<LoginPage />} />
      </Routes>
    </>
  );
};
