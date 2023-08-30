import { Container } from "components/common/Container/Container.styled";
import {
  Form,
  BlockInputWrapper,
  Lable,
  InputWrapper,
  Input,
} from "pages/ResetPasswordPage/ResetPasswordPage.styled";
import {
  ForgotPassTitle,
  ForgotPassText,
} from "pages/ForgotPasswordPage/ForgotPasswordPage.styled";
import { StyledLink, VerifyWrapper } from "pages/VerifyPage/VerifyPage.styled";
import { useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import { joiResolver } from "@hookform/resolvers/joi";
import { resetPassword } from "services/authApi";
import { inputResetPasswordSchema } from "middlewares";
import { registerPageRules } from "constants";
import { successNotification, errorNotification } from "helpers/notification";
import { showPassword, showConfirmPassword } from "helpers/showPasswordHandler";
import { ShowPasswordButton } from "components/common/ShowPasswordButton/ShowPasswordButton";
import { InputNotification } from "components/common/InputNotification/InputNotification";

export default function ResetPasswordPage() {
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

  const resetError = errors["password"];
  const resetConfirmError = errors["confirm"];

  return (
    <Container>
      <VerifyWrapper>
        <StyledLink>Logo</StyledLink>
        <ForgotPassTitle>Enter New Password</ForgotPassTitle>
        <ForgotPassText>
          Your new password must be different from used password
        </ForgotPassText>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <BlockInputWrapper>
            <Lable error={resetError}>Create password</Lable>
            <InputWrapper className="password-wrapper">
              <Input
                {...register("password")}
                className="input-password-register"
                type="password"
                name="password"
                error={resetError}
                placeholder={"Enter a password"}
              />
              <ShowPasswordButton
                onClick={showPassword}
                className="password"
                error={resetError}
              />
            </InputWrapper>
            {resetError ? (
              <InputNotification text={resetError} color={"red"} />
            ) : (
              <InputNotification
                text={registerPageRules.PASSWORD}
                color={"gray"}
              />
            )}
          </BlockInputWrapper>

          <BlockInputWrapper>
            <Lable error={resetConfirmError}>Confirm password</Lable>
            <InputWrapper className="confirm-password-wrapper">
              <Input
                {...register("password")}
                className="input-password-register-confirm"
                type="password"
                name="confirm"
                error={resetConfirmError}
                placeholder={"Enter a password"}
              />
              <ShowPasswordButton
                onClick={showConfirmPassword}
                className="confirm-password"
                error={resetConfirmError}
              />
            </InputWrapper>
            {resetConfirmError ? (
              <InputNotification text={resetConfirmError} color={"red"} />
            ) : (
              <InputNotification
                text={registerPageRules.PASSWORD}
                color={"gray"}
              />
            )}
          </BlockInputWrapper>

          <button type="submit" disabled={!isValid}>
            Save
          </button>
        </Form>
      </VerifyWrapper>
      <ToastContainer />
    </Container>
  );
}
