import * as React from "react";
import { useSelector } from "react-redux";
import { AuthNav } from "components/AuthNav/AuthNav";
import { UserMenu } from "components/UserMenu/UserMenu";
import Title from "components/common/Title/Title";
import { selectAuthIsLoggedIn } from "redux/auth/authSelectors";

export const MainPage = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);

  return (
    <>
      <AuthNav />
    </>
  );
};
