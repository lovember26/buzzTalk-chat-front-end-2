import { Container } from "components/common/Container/Container.styled";
import { successNotification, errorNotification } from "helpers/notification";
import { ToastContainer } from "react-toastify";
import { StyledLink, VerifyWrapper } from "pages/VerifyPage/VerifyPage.styled";
import {
  ForgotPassForm,
  ForgotPassText,
  ForgotPassTitle,
} from "./ForgotPasswordPage.styled";
import { resetPasswordToken } from "services/authApi";
import { BasicInput } from "components/common/BasicInput/BasicInput";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { inputEmailSchema } from "middlewares";

export const ForgotPasswordPage = () => {
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
  return (
    <Container>
      <VerifyWrapper>
        <StyledLink to="/">Logo</StyledLink>
        <ForgotPassTitle>Forgot Password</ForgotPassTitle>
        <ForgotPassText>Enter the email used for registration.</ForgotPassText>
        <ForgotPassText>We'll send you a password reset link.</ForgotPassText>
        <ForgotPassForm onSubmit={handleSubmit(onSubmit)}>
          <BasicInput
            register={register}
            error={errors["email"]}
            name="email"
            lable={"Email"}
            type="email"
            placeholder={"Enter an email"}
          />
          <button type="submit" disabled={!isValid}>
            Reset password
          </button>
        </ForgotPassForm>
      </VerifyWrapper>
      <ToastContainer />
    </Container>
  );
};
