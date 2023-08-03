import { Container } from "components/common/Container/Container.styled";
import {
  ForgotPassText,
  ForgotPassTitle,
} from "pages/ForgotPasswordPage/ForgotPasswordPage.styled";
import { StyledLink, VerifyWrapper } from "pages/VerifyPage/VerifyPage.styled";
import { ResetPasswordForm } from "./ResetPasswordPage.styled";
import { useSearchParams } from "react-router-dom";

import { resetPassword } from "services/authApi";
import { errorNotification, successNotification } from "helpers/notification";
import { ToastContainer } from "react-toastify";
import { showConfirmPassword, showPassword } from "helpers/showPasswordHandler";
import { inputResetPasswordSchema } from "middlewares";
import { PasswordInput } from "components/common/PasswordInput/PasswordInput";
import { useForm } from "react-hook-form";

import { joiResolver } from "@hookform/resolvers/joi";

export const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();

  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(inputResetPasswordSchema),
  });

  const onSubmit = async (data) => {
    console.log(data);

    try {
      await resetPassword({
        email,
        password: data.password,
        confirm_password: data.confirm,
        token,
      });
      successNotification("You have successfully changed your password.");
      reset();
    } catch (error) {
      errorNotification(error.message);
    }
  };
  return (
    <Container>
      <VerifyWrapper>
        <StyledLink>Logo</StyledLink>
        <ForgotPassTitle>Enter New Password</ForgotPassTitle>
        <ForgotPassText>
          Your new password must be different from used password
        </ForgotPassText>
        <ResetPasswordForm onSubmit={handleSubmit(onSubmit)}>
          <PasswordInput
            register={register}
            error={errors["password"]}
            classNameWrapper={"password-wrapper"}
            classNameInput={"input-password-register"}
            classNameButton={"password"}
            name={"password"}
            lable={"Create password"}
            type={"password"}
            placeholder={"Enter a password"}
            onClick={showPassword}
          />

          <PasswordInput
            register={register}
            error={errors["confirm"]}
            classNameWrapper={"confirm-password-wrapper"}
            classNameInput={"input-password-register-confirm"}
            classNameButton={"confirm-password"}
            lable={"Confirm password"}
            type={"password"}
            name={"confirm"}
            placeholder={"Enter a password"}
            onClick={showConfirmPassword}
          />
          <button type="submit" disabled={!isValid}>
            Save
          </button>
        </ResetPasswordForm>
      </VerifyWrapper>
      <ToastContainer />
    </Container>
  );
};
