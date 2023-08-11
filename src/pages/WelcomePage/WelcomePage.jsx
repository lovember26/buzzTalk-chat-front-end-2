import * as React from "react";
import { AuthNav } from "components/AuthNav/AuthNav";
import {
  Wrapper,
  WelcomePageWrapper,
  WelcomePageTextWrapper,
  WelcomePageText,
  LoginPageLinkForgotPassword,
} from "./WelcomePage.styled";

export const WelcomePage = () => {
  return (
    <Wrapper>
      <WelcomePageWrapper>
        <WelcomePageTextWrapper>
          <WelcomePageText>
            Hi! You are at BuzzTalk messenger) <br />
            Sign Up or Log In to start messaging
          </WelcomePageText>
        </WelcomePageTextWrapper>
        <AuthNav />
        <LoginPageLinkForgotPassword to="/forgot-password">
          Forgot Password
        </LoginPageLinkForgotPassword>
      </WelcomePageWrapper>
    </Wrapper>
  );
};
