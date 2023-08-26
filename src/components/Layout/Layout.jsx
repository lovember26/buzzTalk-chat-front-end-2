import * as React from "react";
import { Outlet } from "react-router-dom";
import Logo from "components/Logo/Logo";
import { Header, LogoWrapper, LogoTitle } from "./Layout.styled";

export default function Layout() {
  return (
    <>
      <Header>
        <LogoWrapper>
          <Logo />
          <LogoTitle>BuzzTalk</LogoTitle>
        </LogoWrapper>
      </Header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
