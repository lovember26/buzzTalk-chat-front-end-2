import * as React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { inputLoginSchema } from "middlewares";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { logInThunk } from "redux/auth/authThunk";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
import { BasicInput } from "components/common/BasicInput/BasicInput";
import { PasswordInput } from "components/common/PasswordInput/PasswordInput";
import { MainButton } from "components/common/MainButton/MainButton";
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
import { showPasswordOnLoginPage } from "helpers/showPasswordHandler";
import { errorNotification, successNotification } from "helpers/notification";

export const LoginPage = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const token = searchParams.get("token");
  const verifyQuery = { email, token };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(inputLoginSchema),
  });

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

  const navigateToHomePage = () => {
    navigate("/home", { replace: true });
  };

  const onSubmit = async (data) => {
    try {
      const user = { login: data.login, password: data.password };
      dispatch(logInThunk(user));
      reset();
      navigateToHomePage();
    } catch (error) {}
  };

  return (
    <>
      <LoginPageTitle>Log In</LoginPageTitle>
      <LoginPageWrapper>
        <LoginPageForm onSubmit={handleSubmit(onSubmit)}>
          <BasicInput
            register={register}
            error={errors["login"]}
            lable={"Login"}
            type={"text"}
            name={"login"}
            placeholder={"Enter a login"}
          />

          <PasswordInput
            register={register}
            error={errors["password"]}
            classNameWrapper={"password-wrapper"}
            classNameInput={"input-password-login"}
            classNameButton={"password"}
            lable={"Password"}
            type={"password"}
            name={"password"}
            placeholder={"Enter a password"}
            onClick={showPasswordOnLoginPage}
          />

          <LoginPageLinkForgotPassword to="/forgot-password">
            Forgot Password
          </LoginPageLinkForgotPassword>

          <MainButton type="submit" text="Sign in" disabled={!isValid} />
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
