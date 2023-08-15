import * as React from "react";
import {
  AuthList,
  AuthListItem,
  AuthNavSignUpLink,
  AuthNavSignInLink,
} from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <AuthList>
      <AuthListItem>
        <AuthNavSignUpLink to="/register">Sign up</AuthNavSignUpLink>
      </AuthListItem>
      <AuthListItem>
        <AuthNavSignInLink to="/login">Sign in</AuthNavSignInLink>
      </AuthListItem>
    </AuthList>
  );
};
