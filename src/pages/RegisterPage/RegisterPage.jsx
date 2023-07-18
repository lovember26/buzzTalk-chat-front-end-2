import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showPasswordHandler } from "helpers/showPasswordHandler";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";

import {
  RegisterWrapper,
  RegisterTitle,
  RegisterForm,
  RegisterLable,
  RegisterInput,
  LoginInputPassword,
  RegisterButton,
  RegisterButtonIcon,
  RegisterButtonIconWrapper,
  RegisterInputLoginWrapper,
  RegisterAuthLinkWrapper,
  RegisterAuthLinkText,
  RegisterAuthLink,
} from "./RegisterPage.styled";
import { register } from "redux/auth/authThunk";
import { useDispatch } from "react-redux";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        return setName(value);
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        return;
    }
  };

  const navigateToLogin = () => {
    navigate("/login", { replace: true });
  };

  const navigateToHome = () => {
    navigate("/home", { replace: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = { name, email, password };

    dispatch(register(user));

    setName("");
    setEmail("");
    setPassword("");

    navigateToHome();
  };

  const showPassword = () => {
    const visibilityIcons = document.querySelector("div form div div");
    const passwordInput = document.querySelector(
      "form .input-password-register"
    );

    showPasswordHandler(visibilityIcons, passwordInput);
  };

  return (
    <>
      <RegisterTitle>Реєстрація</RegisterTitle>
      <RegisterWrapper>
        <RegisterForm onSubmit={handleSubmit}>
          <RegisterLable>Ім'я</RegisterLable>
          <RegisterInput
            type="text"
            name="name"
            value={name}
            placeholder="Введіть ім'я"
            required
            onChange={handleChange}
          ></RegisterInput>
          <RegisterLable>Пошта</RegisterLable>
          <RegisterInput
            type="email"
            name="email"
            value={email}
            placeholder="Введіть пошту"
            required
            onChange={handleChange}
          ></RegisterInput>
          <RegisterLable>Пароль</RegisterLable>
          <RegisterInputLoginWrapper>
            <LoginInputPassword
              className="input-password-register"
              type="password"
              name="password"
              value={password}
              placeholder="Введіть пароль"
              required
              onChange={handleChange}
            ></LoginInputPassword>
            <RegisterButtonIconWrapper className="register-icon-wrapper">
              <RegisterButtonIcon size={25} onClick={showPassword} />
            </RegisterButtonIconWrapper>
          </RegisterInputLoginWrapper>
          <RegisterButton type="submit">Зареєструватися</RegisterButton>
        </RegisterForm>
        <RegisterAuthLinkWrapper>
          <RegisterAuthLinkText>Вже є акаунт?</RegisterAuthLinkText>
          <RegisterAuthLink onClick={navigateToLogin}>Увійти</RegisterAuthLink>
        </RegisterAuthLinkWrapper>
      </RegisterWrapper>
      <AppToastContainer size={30} />
    </>
  );
};
