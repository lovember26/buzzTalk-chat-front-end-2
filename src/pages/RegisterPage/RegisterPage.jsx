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
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "username":
        return setUserName(value);
      case "password":
        return setPassword(value);
      case "confirm-password":
        return setConfirmPassword(value);
      case "email":
        return setEmail(value);
      case "first-name":
        return setFirstName(value);
      case "last-name":
        return setLastName(value);
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

    const user = {
      username: userName,
      password: password,
      confirm_password: confirmPassword,
      email: email,
      first_name: firstName,
      last_name: lastName,
    };

    dispatch(register(user));

    setUserName("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
    setFirstName("");
    setLastName("");

    navigateToHome();
  };

  const showPassword = () => {
    const visibilityIcons = document.querySelector("div form div div");
    const passwordInput = document.querySelector(
      "form .input-password-register"
    );

    showPasswordHandler(visibilityIcons, passwordInput);
  };

  const showConfirmPassword = () => {
    const visibilityIcons = document.querySelector(
      "div form .confirm-password"
    );
    const passwordInput = document.querySelector(
      "form .input-password-register-confirm"
    );

    showPasswordHandler(visibilityIcons, passwordInput);
  };

  return (
    <>
      <RegisterTitle>User registration</RegisterTitle>
      <RegisterWrapper>
        <RegisterForm onSubmit={handleSubmit}>
          <RegisterLable>Username</RegisterLable>
          <RegisterInput
            type="text"
            name="username"
            value={userName}
            placeholder="Enter a name"
            required
            onChange={handleChange}
          ></RegisterInput>
          <RegisterLable>Password</RegisterLable>
          <RegisterInputLoginWrapper>
            <LoginInputPassword
              className="input-password-register"
              type="password"
              name="password"
              value={password}
              placeholder="Enter a password"
              required
              onChange={handleChange}
            ></LoginInputPassword>
            <RegisterButtonIconWrapper className="register-icon-wrapper-password">
              <RegisterButtonIcon
                size={25}
                onClick={showPassword}
                className="password"
              />
            </RegisterButtonIconWrapper>
          </RegisterInputLoginWrapper>
          <RegisterLable>Confirm password</RegisterLable>
          <RegisterInputLoginWrapper>
            <LoginInputPassword
              className="input-password-register-confirm"
              type="password"
              name="confirm-password"
              value={confirmPassword}
              placeholder="Enter a password"
              required
              onChange={handleChange}
            ></LoginInputPassword>
            <RegisterButtonIconWrapper className="register-icon-wrapper-confirm-password">
              <RegisterButtonIcon
                size={25}
                onClick={showConfirmPassword}
                className="confirm-password"
              />
            </RegisterButtonIconWrapper>
          </RegisterInputLoginWrapper>
          <RegisterLable>Email</RegisterLable>
          <RegisterInput
            type="email"
            name="email"
            value={email}
            placeholder="Enter an email"
            required
            onChange={handleChange}
          ></RegisterInput>
          <RegisterLable>First name</RegisterLable>
          <RegisterInput
            type="text"
            name="first-name"
            value={firstName}
            placeholder="Enter a first name"
            required
            onChange={handleChange}
          ></RegisterInput>
          <RegisterLable>Last name</RegisterLable>
          <RegisterInput
            type="text"
            name="last-name"
            value={lastName}
            placeholder="Enter a last name"
            required
            onChange={handleChange}
          ></RegisterInput>
          <RegisterButton type="submit">Sign up</RegisterButton>
        </RegisterForm>
        <RegisterAuthLinkWrapper>
          <RegisterAuthLinkText>Already have an account?</RegisterAuthLinkText>
          <RegisterAuthLink onClick={navigateToLogin}>Sign in</RegisterAuthLink>
        </RegisterAuthLinkWrapper>
      </RegisterWrapper>
      <AppToastContainer size={30} />
    </>
  );
};
