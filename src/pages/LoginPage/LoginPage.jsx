import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn } from "../../redux/auth/authSlice";
import { showPasswordHandler } from "../../helpers/showPasswordHandler";
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
    const email = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;

    dispatch(logIn({ email, password }));

    event.preventDefault();
    setEmail("");
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
      <LoginTitle>Вхід</LoginTitle>
      <LoginWrapper>
        <LoginForm onSubmit={handleSubmit}>
          <LoginLable>Пошта</LoginLable>
          <LoginInput
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Введіть пошту"
            required
          ></LoginInput>
          <LoginLable>Пароль</LoginLable>
          <LoginInputPasswordWrapper>
            <LoginInputPassword
              className="input-password-login"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Введіть пароль"
              required
            ></LoginInputPassword>
            <LoginButtonIconWrapper>
              <LoginButtonIcon size={25} onClick={showPassword} />
            </LoginButtonIconWrapper>
          </LoginInputPasswordWrapper>
          <LoginButton type="submit">Вхід</LoginButton>
        </LoginForm>
        <LoginAuthLinkWrapper>
          <LoginAuthLinkText>Немає акаунту?</LoginAuthLinkText>
          <LoginAuthLink onClick={navigateToRegister}>Реєстрація</LoginAuthLink>
        </LoginAuthLinkWrapper>
      </LoginWrapper>
    </>
  );
};
