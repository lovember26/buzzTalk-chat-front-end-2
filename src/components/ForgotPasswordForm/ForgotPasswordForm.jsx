import * as React from "react";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { inputEmailSchema } from "middlewares";
import { registerPageRules } from "constants";
import { InputNotification } from "components/common/InputNotification/InputNotification";
import { selectInputNotification } from "helpers/selectWrongPasswordNotification";
import { resetPasswordToken } from "services/authApi";
import { successNotification, errorNotification } from "helpers/notification";
import {
  Form,
  BlockInputWrapper,
  Lable,
  InputWrapper,
  Input,
  Icon,
} from "./ForgotPasswordForm.styled";

export const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(inputEmailSchema),
  });

  const onSubmit = async (data) => {
    console.log("hello");
    const email = data.email;
    try {
      await resetPasswordToken({ email });
      successNotification("Check your email to reset password!");
      reset();
    } catch (error) {
      errorNotification(error.message);
    }
  };

  const emailError = selectInputNotification(errors["email"]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <BlockInputWrapper>
        <Lable htmlFor="test" error={emailError}>
          Email
        </Lable>
        <InputWrapper>
          <Input
            {...register("email")}
            type="email"
            error={emailError}
            placeholder={"Enter an email"}
          />
          <Icon size={28} error={emailError} />
        </InputWrapper>
        {emailError ? (
          <InputNotification text={emailError} color={"red"} />
        ) : (
          <InputNotification text={registerPageRules.EMAIL} color={"gray"} />
        )}
      </BlockInputWrapper>

      <button type="submit" disabled={!isValid}>
        Reset password
      </button>
    </Form>
  );
};
