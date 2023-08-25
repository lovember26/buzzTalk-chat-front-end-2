import * as React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Logo from "components/Logo/Logo";
import { Header, LogoWrapper, LogoTitle } from "./Layout.styled";

export const Layout = () => {
  return (
    <>
      <Header>
        <LogoWrapper>
          <Logo />
          <LogoTitle>BuzzTalk</LogoTitle>
        </LogoWrapper>
      </Header>

      <main>
        <Suspense fullback={null}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
