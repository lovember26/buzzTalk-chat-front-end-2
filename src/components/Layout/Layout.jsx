import * as React from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
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
