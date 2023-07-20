import * as React from "react";
import { AuthList, AuthListItem, AuthNavLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <AuthList>
      <AuthListItem>
        <AuthNavLink to="/register">Sign up</AuthNavLink>
      </AuthListItem>
      <AuthListItem>
        <AuthNavLink to="/login">Sign in</AuthNavLink>
      </AuthListItem>
    </AuthList>
  );
};
