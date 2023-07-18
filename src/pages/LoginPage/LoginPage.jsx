import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "redux/auth/authThunk";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";

import { showPasswordHandler } from "helpers/showPasswordHandler";
import {
  LoginWrapper,
  LoginTitle,
  LoginForm,
  LoginLable,
  LoginInput,
  LoginInputPassword,
  LoginButton,
  LoginButtonIcon,
  LoginInputPasswordWrapper,
  LoginButtonIconWrapper,
  LoginAuthLinkWrapper,
  LoginAuthLinkText,
  LoginAuthLink,
} from "./LoginPage.styled";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToRegister = () => {
    navigate("/register", { replace: true });
  };

  const navigateToHomePage = () => {
    navigate("/home", { replace: true });
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { email, password };

    setEmail("");
    setPassword("");

    dispatch(logIn(user));
    navigateToHomePage();
  };

  const showPassword = () => {
    const visibilityIcons = document.querySelector("div form div div");
    const passwordInput = document.querySelector("form .input-password-login");

    showPasswordHandler(visibilityIcons, passwordInput);
  };

  return (
    <>
      <LoginTitle>Exit</LoginTitle>
      <LoginWrapper>
        <LoginForm onSubmit={handleSubmit}>
          <LoginLable>Email</LoginLable>
          <LoginInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter an email"
            required
          ></LoginInput>
          <LoginLable>Password</LoginLable>
          <LoginInputPasswordWrapper>
            <LoginInputPassword
              className="input-password-login"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Enter a password"
              required
            ></LoginInputPassword>
            <LoginButtonIconWrapper>
              <LoginButtonIcon size={25} onClick={showPassword} />
            </LoginButtonIconWrapper>
          </LoginInputPasswordWrapper>
          <LoginButton type="submit">Sign in</LoginButton>
        </LoginForm>
        <LoginAuthLinkWrapper>
          <LoginAuthLinkText>Don't have an account?</LoginAuthLinkText>
          <LoginAuthLink onClick={navigateToRegister}>Sign up</LoginAuthLink>
        </LoginAuthLinkWrapper>
      </LoginWrapper>
      <AppToastContainer size={30} />
    </>
  );
};
