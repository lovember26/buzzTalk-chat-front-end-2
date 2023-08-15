import * as React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Logo from "components/Logo/Logo";
import { Header, LogoWrapper, LogoTitle } from "./AppBar.styled";

export const AppBar = () => {
  return (
    <Header>
      <LogoWrapper>
        <Logo />
        <LogoTitle>BuzzTalk</LogoTitle>
      </LogoWrapper>
      <Suspense fullback={null}>
        <Outlet />
      </Suspense>
    </Header>
  );
};
