import * as React from "react";
import { useSelector } from "react-redux";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";
import { MainNav } from "../../components/MainNav/MainNav";
import { AuthNav } from "../../components/AuthNav/AuthNav";
import { UserMenu } from "../../components/UserMenu/UserMenu";
import { Header } from "./AppBar.styled";

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Header>
      <MainNav />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
      <Suspense fullback={null}>
        <Outlet />
      </Suspense>
    </Header>
  );
};
