import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showPasswordHandler } from "helpers/showPasswordHandler";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
import { BasicInput } from "components/common/BasicInput/BasicInput";
import { PasswordInput } from "components/common/PasswordInput/PasswordInput";
import { MainButton } from "components/common/MainButton/MainButton";
import { Checkbox } from "components/common/CheckBox/CheckBox";
import {
  RegisterPageTitle,
  RegisterPageWrapper,
  RegisterPageForm,
  RegisterPageRedirectLinkWrapper,
  RegisterPageRedirectLink,
} from "./RegisterPage.styled";
import { registerThunk } from "redux/auth/authThunk";
import { useDispatch } from "react-redux";
import { registerPageRules } from "constants";

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
      <RegisterPageTitle>Sign up</RegisterPageTitle>
      <RegisterPageWrapper>
        <RegisterPageForm onSubmit={handleSubmit}>
          <BasicInput
            lable={"Email"}
            type={"email"}
            name={"email"}
            value={email}
            placeholder={"Enter an email"}
            required
            onChange={handleChange}
            ruleText={registerPageRules.EMAIL}
          />

          <PasswordInput
            classNameWrapper={"password-wrapper"}
            classNameInput={"input-password-register"}
            classNameButton={"password"}
            lable={"Create password"}
            type={"password"}
            name={"password"}
            value={password}
            placeholder={"Enter a password"}
            required
            onChange={handleChange}
            ruleText={registerPageRules.PASSWORD}
            onClick={showPassword}
          />

          <PasswordInput
            classNameWrapper={"confirm-password-wrapper"}
            classNameInput={"input-password-register-confirm"}
            classNameButton={"confirm-password"}
            lable={"Confirm password"}
            type={"password"}
            name={"confirm-password"}
            value={confirmPassword}
            placeholder={"Enter a password"}
            required
            onChange={handleChange}
            ruleText={registerPageRules.CONFIRM_PASSWORD}
            onClick={showConfirmPassword}
          />

          <Checkbox
            text="I accept the
        policy and terms"
            onChange={handleCheckboxChange}
          />

          <MainButton
            type="submit"
            text="Sign up"
            disabledHandler={!validate()}
          />
        </RegisterPageForm>

        <RegisterPageRedirectLinkWrapper>
          <RegisterPageRedirectLink onClick={navigateToLogin}>
            I’am already registered
          </RegisterPageRedirectLink>
        </RegisterPageRedirectLinkWrapper>
      </RegisterPageWrapper>
      <AppToastContainer size={30} />
    </>
  );
};
