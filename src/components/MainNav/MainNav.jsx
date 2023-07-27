import * as React from "react";
import {
  MainNavList,
  MainNavItem,
  MainNavigationNavLink,
} from "./MainNav.styled";
import { useSelector } from "react-redux";
import { selectAuthIsLoggedIn } from "redux/auth/authSelectors";

export const MainNav = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  return (
    <MainNavList>
      {isLoggedIn && (
        <>
          <MainNavItem>
            <MainNavigationNavLink to="/home">Home</MainNavigationNavLink>
          </MainNavItem>
          <MainNavItem>
            <MainNavigationNavLink to="/items">Items</MainNavigationNavLink>
          </MainNavItem>
        </>
      )}
    </MainNavList>
  );
};
