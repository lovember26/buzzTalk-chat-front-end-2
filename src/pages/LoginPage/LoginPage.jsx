import * as React from "react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { verifyUserService } from "services/authApi";
import { LoginForm } from "components/LoginForm/LoginForm";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
import { errorNotification, successNotification } from "helpers/notification";
import {
  LoginPageTitle,
  LoginPageLinksWrapper,
  LoginPageLinkForgotPassword,
  LoginPageRedirectLinkWrapper,
  LoginPageRedirectText,
  LoginPageRedirectLink,
} from "./LoginPage.styled";

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const verifyQuery = { email, token };

  const navigate = useNavigate();

  useEffect(() => {
    if (email && token) {
      const verifyUser = async () => {
        try {
          await verifyUserService(verifyQuery);
          successNotification("Verification success!");
        } catch (error) {
          errorNotification(error.message);
        }
      };
      verifyUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateToRegister = () => {
    navigate("/register", { replace: true });
  };

  return (
    <>
      <LoginPageTitle>Log In</LoginPageTitle>

      <LoginForm />

      <LoginPageLinksWrapper>
        <LoginPageLinkForgotPassword to="/forgot-password">
          Forgot Password
        </LoginPageLinkForgotPassword>

        <LoginPageRedirectLinkWrapper LoginAuthLinkWrapper>
          <LoginPageRedirectText>Back to</LoginPageRedirectText>
          <LoginPageRedirectLink onClick={navigateToRegister}>
            Sign up
          </LoginPageRedirectLink>
        </LoginPageRedirectLinkWrapper>
      </LoginPageLinksWrapper>
      <AppToastContainer size={30} />
    </>
  );
}
