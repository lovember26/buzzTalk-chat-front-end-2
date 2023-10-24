import * as React from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { ReactComponent as SmallLogo } from "../../images/logo-small.svg";
import { Header, LogoWrapper } from "./Layout.styled";

export default function Layout() {
  return (
    <>
      <Header>
        <SmallLogo className="small-logo" />
        <LogoWrapper>
          <Logo />
          <h1>BuzzTalk</h1>
        </LogoWrapper>
      </Header>

      <main>
        <Outlet />
      </main>
    </>
  );
}
