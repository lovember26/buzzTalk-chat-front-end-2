import * as React from "react";
import { AuthNav } from "components/AuthNav/AuthNav";
import {
  Wrapper,
  WelcomePageWrapper,
  WelcomePageTextWrapper,
  LoginPageLinkForgotPassword,
} from "./MainPage.styled";

export default function MainPage() {
  return (
    <Wrapper>
      <WelcomePageWrapper>
        <WelcomePageTextWrapper>
          <p>Hi! You are at BuzzTalk messenger!</p>
          <p>Sign Up or Log In to start messaging.</p>
        </WelcomePageTextWrapper>
        <AuthNav />
        <LoginPageLinkForgotPassword to="/forgot-password">
          Forgot Password
        </LoginPageLinkForgotPassword>
      </WelcomePageWrapper>
    </Wrapper>
  );
}
