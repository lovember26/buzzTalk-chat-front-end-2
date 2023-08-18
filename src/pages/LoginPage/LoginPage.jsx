import * as React from "react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { persistedStore } from "redux/store";
import { joiResolver } from "@hookform/resolvers/joi";
import { inputLoginSchema } from "middlewares";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { logInThunk } from "redux/auth/authThunk";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
import { BasicInput } from "components/common/BasicInput/BasicInput";
import { PasswordInput } from "components/common/PasswordInput/PasswordInput";
import { MainButton } from "components/common/MainButton/MainButton";
import { Checkbox } from "components/common/CheckBox/CheckBox";
import { InputNotification } from "components/common/InputNotification/InputNotification";
import {
  selectWrongPasswordInputNotification,
  selectWrongPasswordNotification,
} from "helpers/selectWrongPasswordNotification";
import {
  LoginPageTitle,
  LoginPageForm,
  LoginPageLinksWrapper,
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

  //To generate notifications about the number of password attempts
  const [wrongPasswordCount, setWrongPasswordCount] = useState(0);
  const [attempts, setAttempts] = useState(3);

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
    defaultValues: {
      login: "",
      password: "",
      rememberMe: true,
    },
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
    navigate("/chat-rooms/friends/all", { replace: true });
  };

  const onSubmit = async ({ login, password, rememberMe }) => {
    try {
      const user = { login: login, password: password };

      if (!rememberMe) {
        persistedStore.pause();
        persistedStore.flush().then(() => {
          return persistedStore.purge();
        });
      }

      //Fix when an error code will be sent from the backend
      const data = await dispatch(logInThunk(user));

      console.log("data", data);

      if (data.payload[4001]) {
        setWrongPasswordCount(wrongPasswordCount + 1);
        setAttempts(attempts - 1);
      }

      // Delete when the routes are configured correctly
      if (!data.payload.access) {
        return;
      }

      navigateToHomePage();
      reset();
    } catch (error) {}
  };

  return (
    <>
      <LoginPageTitle>Log In</LoginPageTitle>
      <LoginPageForm onSubmit={handleSubmit(onSubmit)}>
        <BasicInput
          register={register}
          error={selectWrongPasswordInputNotification(
            wrongPasswordCount,
            "login",
            errors["login"]
          )}
          lable={"Email or username"}
          type={"text"}
          name={"login"}
          wrongPasswordCount={wrongPasswordCount}
        />

        <PasswordInput
          register={register}
          error={selectWrongPasswordInputNotification(
            wrongPasswordCount,
            "password",
            errors["password"]
          )}
          classNameWrapper={"password-wrapper"}
          classNameInput={"input-password-login"}
          classNameButton={"password"}
          lable={"Password"}
          type={"password"}
          name={"password"}
          onClick={showPasswordOnLoginPage}
          wrongPasswordCount={wrongPasswordCount}
        />

        {wrongPasswordCount < 3 && (
          <Checkbox
            register={register}
            error={errors["rememberMe"]}
            name={"rememberMe"}
            text="Remember me"
          />
        )}

        <InputNotification
          text={selectWrongPasswordNotification(wrongPasswordCount, attempts)}
          color={wrongPasswordCount >= 3 ? "#777777" : "red"}
          mb={15}
        />

        {wrongPasswordCount < 3 && (
          <MainButton type="submit" text="Sign in" disabled={!isValid} />
        )}
      </LoginPageForm>

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
};
