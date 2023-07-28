import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showPasswordHandler } from "helpers/showPasswordHandler";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
import { Checkbox } from "components/CheckBox/CheckBox";
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
  RegisterAuthLink,
  RegisterInputWrapper,
  RegisterErrorText,
} from "./RegisterPage.styled";
import { registerThunk } from "redux/auth/authThunk";
import { useDispatch } from "react-redux";

export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState(false);

  const navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      case "confirm-password":
        return setConfirmPassword(value);
      default:
        return;
    }
  };

  const navigateToLogin = () => {
    navigate("/login", { replace: true });
  };

  const handleCheckboxChange = (event) => {
    setAgree(event.currentTarget.checked);
  };

  const validate = () => {
    if (email.trim() && password.trim() && confirmPassword.trim() && agree) {
      return true;
    }

    return false;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      email: email,
      password: password,
      confirm_password: confirmPassword,
    };

    dispatch(registerThunk(user));

    setEmail("");
    setPassword("");
    setConfirmPassword("");

    navigate("/verify", { replace: true });
  };

  const showPassword = () => {
    const visibilityIcons = document.querySelector(
      "div form div .password-wrapper"
    );
    const passwordInput = document.querySelector(
      "form .input-password-register"
    );

    showPasswordHandler(visibilityIcons, passwordInput);
  };

  const showConfirmPassword = () => {
    const visibilityIcons = document.querySelector(
      "div form div .confirm-password-wrapper"
    );

    const passwordInput = document.querySelector(
      "form .input-password-register-confirm"
    );

    showPasswordHandler(visibilityIcons, passwordInput);
  };

  return (
    <>
      <RegisterTitle>Sign up</RegisterTitle>
      <RegisterWrapper>
        <RegisterForm onSubmit={handleSubmit}>
          <RegisterInputWrapper>
            <RegisterLable>Email</RegisterLable>
            <RegisterInput
              type="email"
              name="email"
              value={email}
              placeholder="Enter a name"
              required
              onChange={handleChange}
            ></RegisterInput>
            <RegisterErrorText>
              Please enter the email address associated with your account.
            </RegisterErrorText>
          </RegisterInputWrapper>

          <RegisterInputWrapper>
            <RegisterLable>Create password</RegisterLable>
            <RegisterInputLoginWrapper className="password-wrapper">
              <LoginInputPassword
                className="input-password-register"
                type="password"
                name="password"
                value={password}
                placeholder="Enter a password"
                required
                onChange={handleChange}
              ></LoginInputPassword>
              <RegisterButtonIconWrapper>
                <RegisterButtonIcon
                  size={25}
                  onClick={showPassword}
                  className="password"
                />
              </RegisterButtonIconWrapper>
            </RegisterInputLoginWrapper>
            <RegisterErrorText>
              Please enter the email address associated with your account.
            </RegisterErrorText>
          </RegisterInputWrapper>

          <RegisterInputWrapper>
            <RegisterLable>Confirm password</RegisterLable>
            <RegisterInputLoginWrapper className="confirm-password-wrapper">
              <LoginInputPassword
                className="input-password-register-confirm"
                type="password"
                name="confirm-password"
                value={confirmPassword}
                placeholder="Enter a password"
                required
                onChange={handleChange}
              ></LoginInputPassword>
              <RegisterButtonIconWrapper>
                <RegisterButtonIcon
                  size={25}
                  onClick={showConfirmPassword}
                  className="confirm-password"
                />
              </RegisterButtonIconWrapper>
            </RegisterInputLoginWrapper>
            <RegisterErrorText>
              Please enter the email address associated with your account.
            </RegisterErrorText>
          </RegisterInputWrapper>

          <Checkbox
            text="I accept the
        policy and terms"
            onChange={handleCheckboxChange}
          />

          <RegisterButton type="submit" disabled={!validate()}>
            Sign up
          </RegisterButton>
        </RegisterForm>
        <RegisterAuthLinkWrapper>
          <RegisterAuthLink onClick={navigateToLogin}>
            I’am already registered
          </RegisterAuthLink>
        </RegisterAuthLinkWrapper>
      </RegisterWrapper>
      <AppToastContainer size={30} />
    </>
  );
};
