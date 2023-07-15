import * as React from "react";
import { AuthList, AuthListItem, AuthNavLink } from "./AuthNav.styled";

export const AuthNav = () => {
  return (
    <AuthList>
      <AuthListItem>
        <AuthNavLink to="/register">Реєстрація</AuthNavLink>
      </AuthListItem>
      <AuthListItem>
        <AuthNavLink to="/login">Логін</AuthNavLink>
      </AuthListItem>
    </AuthList>
  );
};
