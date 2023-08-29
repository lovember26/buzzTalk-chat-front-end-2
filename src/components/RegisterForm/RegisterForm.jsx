import * as React from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { registerThunk } from "redux/auth/authThunk";
import { inputRegisterSchema } from "middlewares";
import { selectInputNotification } from "helpers/selectWrongPasswordNotification";
import { showPassword, showConfirmPassword } from "helpers/showPasswordHandler";
import { registerPageRules } from "constants";
import { MainButton } from "components/common/MainButton/MainButton";
import { ShowPasswordButton } from "components/common/ShowPasswordButton/ShowPasswordButton";
import { Checkbox } from "components/common/CheckBox/CheckBox";
import { InputNotification } from "components/common/InputNotification/InputNotification";
import {
  RegisterPageForm,
  BlockInputWrapper,
  Lable,
  InputWrapper,
  Input,
  Icon,
} from "./RegisterForm.styled";

export const RegisterForm = ({ setEmail }) => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(inputRegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirm: "",
      agreePolicy: false,
    },
  });

  const onSubmit = async (data) => {
    console.log("onSubmit data", data);
    try {
      const user = {
        email: data.email,
        password: data.password,
        confirm_password: data.confirm,
      };
      setEmail(data.email);
      await dispatch(registerThunk(user));

      reset();
    } catch (error) {}
  };
  const emailError = selectInputNotification(errors["email"]);
  const passwordError = selectInputNotification(errors["password"]);
  const confirmPasswordError = selectInputNotification(errors["confirm"]);

  return (
    <RegisterPageForm onSubmit={handleSubmit(onSubmit)}>
      <BlockInputWrapper>
        <Lable htmlFor="test" error={emailError}>
          Email
        </Lable>
        <InputWrapper>
          <Input {...register("email")} type="email" error={emailError} />
          <Icon size={28} error={emailError} />
        </InputWrapper>
        {emailError ? (
          <InputNotification text={emailError} color={"red"} />
        ) : (
          <InputNotification text={registerPageRules.EMAIL} color={"gray"} />
        )}
      </BlockInputWrapper>

      <BlockInputWrapper>
        <Lable error={passwordError}>Create password</Lable>
        <InputWrapper className="password-wrapper">
          <Input
            {...register("password")}
            className="input-password-register"
            type="password"
            name="password"
            error={passwordError}
          />
          <ShowPasswordButton
            onClick={showPassword}
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

      <BlockInputWrapper>
        <Lable error={confirmPasswordError}>Confirm password</Lable>
        <InputWrapper className="confirm-password-wrapper">
          <Input
            {...register("confirm")}
            className="input-password-register-confirm"
            type="password"
            name="confirm"
            error={confirmPasswordError}
          />
          <ShowPasswordButton
            onClick={showConfirmPassword}
            className="confirm-password"
            error={confirmPasswordError}
          />
        </InputWrapper>
        {confirmPasswordError ? (
          <InputNotification text={confirmPasswordError} color={"red"} />
        ) : (
          <InputNotification
            text={registerPageRules.CONFIRM_PASSWORD}
            color={"gray"}
          />
        )}
      </BlockInputWrapper>

      <Checkbox
        register={register}
        name={"agreePolicy"}
        text="I accept the
        policy and terms"
        error={errors["agreePolicy"]}
      />

      <MainButton type="submit" text="Sign up" disabled={!isValid} />
    </RegisterPageForm>
  );
};
