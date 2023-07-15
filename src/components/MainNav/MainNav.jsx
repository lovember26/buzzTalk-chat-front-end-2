import * as React from "react";
import {
  MainNavList,
  MainNavItem,
  MainNavigationNavLink,
} from "./MainNav.styled";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/authSelectors";

export const MainNav = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <MainNavList>
      {isLoggedIn && (
        <MainNavItem>
          <MainNavigationNavLink to="/home">Home</MainNavigationNavLink>
        </MainNavItem>
      )}
    </MainNavList>
  );
};
