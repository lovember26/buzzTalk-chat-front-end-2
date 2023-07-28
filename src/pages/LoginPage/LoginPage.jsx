import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { logInThunk } from "redux/auth/authThunk";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
import { BasicInput } from "components/common/BasicInput/BasicInput";
import { PasswordInput } from "components/common/PasswordInput/PasswordInput";
import { MainButton } from "components/common/MainButton/MainButton";
import { showPasswordHandler } from "helpers/showPasswordHandler";
import {
  LoginPageTitle,
  LoginPageWrapper,
  LoginPageForm,
  LoginPageLinkForgotPassword,
  LoginPageRedirectLinkWrapper,
  LoginPageRedirectText,
  LoginPageRedirectLink,
} from "./LoginPage.styled";
import { verifyUserService } from "services/authApi";
import { errorNotification, successNotification } from "helpers/notification";
import { loginPageRules } from "constants";

export const LoginPage = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const verifyQuery = { email, token };

  const dispatch = useDispatch();
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

  const validate = () => {
    if (login.trim() && password.trim()) {
      return true;
    }

    return false;
  };

  const navigateToRegister = () => {
    navigate("/register", { replace: true });
  };

  const navigateToHomePage = () => {
    navigate("/home", { replace: true });
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "login":
        return setLogin(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { login, password };
    dispatch(logInThunk(user));

    setLogin("");
    setPassword("");

    navigateToHomePage();
  };

  const showPassword = () => {
    const visibilityIcons = document.querySelector("div form div div");
    const passwordInput = document.querySelector("form .input-password-login");

    showPasswordHandler(visibilityIcons, passwordInput);
  };

  return (
    <>
      <LoginPageTitle>Log In</LoginPageTitle>
      <LoginPageWrapper>
        <LoginPageForm onSubmit={handleSubmit}>
          <BasicInput
            lable={"Login"}
            type={"text"}
            name={"login"}
            value={login}
            placeholder={"Enter a login"}
            required
            onChange={handleChange}
            ruleText={loginPageRules.LOGIN}
          />

          <PasswordInput
            classNameWrapper={"password-wrapper"}
            classNameInput={"input-password-login"}
            classNameButton={"password"}
            lable={"Password"}
            type={"password"}
            name={"password"}
            value={password}
            placeholder={"Enter a password"}
            required
            onChange={handleChange}
            ruleText={loginPageRules.PASSWORD}
            onClick={showPassword}
          />

          <LoginPageLinkForgotPassword to="/forgot-password">
            Forgot Password
          </LoginPageLinkForgotPassword>

          <MainButton
            type="submit"
            text="Sign in"
            disabledHandler={!validate()}
          />
        </LoginPageForm>

        <LoginPageRedirectLinkWrapper LoginAuthLinkWrapper>
          <LoginPageRedirectText>Back to</LoginPageRedirectText>
          <LoginPageRedirectLink onClick={navigateToRegister}>
            Sign up
          </LoginPageRedirectLink>
        </LoginPageRedirectLinkWrapper>
      </LoginPageWrapper>
      <AppToastContainer size={30} />
    </>
  );
};
