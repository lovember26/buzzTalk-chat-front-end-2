import * as React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { logInThunk, verifyThunk } from "redux/auth/authThunk";
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
      dispatch(verifyThunk(verifyQuery));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
      <LoginTitle>Exit</LoginTitle>
      <LoginWrapper>
        <LoginForm onSubmit={handleSubmit}>
          <LoginLable>Login</LoginLable>
          <LoginInput
            type="text"
            name="login"
            value={login}
            onChange={handleChange}
            placeholder="Enter a login"
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
          <Link to="/forgot-password">Forgot Password</Link>
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
