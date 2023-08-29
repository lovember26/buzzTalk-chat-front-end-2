import * as React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { persistedStore } from "redux/store";
import { joiResolver } from "@hookform/resolvers/joi";
import { logInThunk } from "redux/auth/authThunk";
import { inputLoginSchema } from "middlewares";
import { showPasswordOnLoginPage } from "helpers/showPasswordHandler";
import { selectWrongPasswordNotification } from "helpers/selectWrongPasswordNotification";
import { selectWrongPasswordInputNotification } from "helpers/selectWrongPasswordNotification";
import { loginPageRules, registerPageRules } from "constants";
import { MainButton } from "components/common/MainButton/MainButton";
import { ShowPasswordButton } from "components/common/ShowPasswordButton/ShowPasswordButton";
import { Checkbox } from "components/common/CheckBox/CheckBox";
import { InputNotification } from "components/common/InputNotification/InputNotification";
import {
  LoginPageForm,
  BlockInputWrapper,
  Icon,
  Lable,
  InputWrapper,
  Input,
} from "./LoginForm.styled";

export const LoginForm = () => {
  //To generate notifications about the number of password attempts
  const [wrongPasswordCount, setWrongPasswordCount] = useState(0);
  const [attempts, setAttempts] = useState(3);

  const dispatch = useDispatch();

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

      if (data.payload[4001]) {
        setWrongPasswordCount(wrongPasswordCount + 1);
        setAttempts(attempts - 1);
      }

      reset();
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginError = selectWrongPasswordInputNotification(
    wrongPasswordCount,
    "login",
    errors["login"]
  );

  const passwordError = selectWrongPasswordInputNotification(
    wrongPasswordCount,
    "password",
    errors["password"]
  );

  return (
    <LoginPageForm onSubmit={handleSubmit(onSubmit)}>
      <BlockInputWrapper>
        <Lable htmlFor="test" error={loginError}>
          Email or username
        </Lable>
        <InputWrapper>
          <Input {...register("login")} type="text" error={loginError} />
          <Icon size={28} error={loginError} />
        </InputWrapper>
        {loginError ? (
          <InputNotification text={loginError} color={"red"} />
        ) : (
          <InputNotification text={loginPageRules.LOGIN} color={"gray"} />
        )}
      </BlockInputWrapper>

      <BlockInputWrapper>
        <Lable error={passwordError}>Password</Lable>
        <InputWrapper className="password-wrapper">
          <Input
            {...register("password")}
            className="input-password-login"
            type="password"
            name="password"
            error={passwordError}
          />
          <ShowPasswordButton
            onClick={showPasswordOnLoginPage}
            className="password"
            error={passwordError}
          />
        </InputWrapper>
        {passwordError ? (
          <InputNotification text={passwordError} color={"red"} />
        ) : (
          <InputNotification text={registerPageRules.PASSWORD} color={"gray"} />
        )}
      </BlockInputWrapper>

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
  );
};
