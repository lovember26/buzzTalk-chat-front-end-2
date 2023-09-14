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

import { joiResolver } from "@hookform/resolvers/joi";
import { resetPassword } from "services/authApi";
import { inputResetPasswordSchema } from "middlewares";
import { registerPageRules } from "constants";
import { successNotification, errorNotification } from "helpers/notification";
import { showPassword, showConfirmPassword } from "helpers/showPasswordHandler";

import { InputNotification } from "components/common/InputNotification/InputNotification";
import { ShowPasswordRegisterPageButton } from "components/common/ShowPasswordRegisterPageButton/ShowPasswordRegisterPageButton";
import { selectInputNotification } from "helpers/selectWrongPasswordNotification";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();

  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: joiResolver(inputResetPasswordSchema),
    defaultValues: {
      password: "",
      confirm: "",
    },
  });

  const onSubmit = async (data) => {
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

  const passwordError = selectInputNotification(errors["password"]);
  const confirmPasswordError = selectInputNotification(errors["confirm"]);

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
            <Lable error={passwordError}>Create password</Lable>
            <InputWrapper className="password-wrapper">
              <Input
                {...register("password")}
                className="input-password-register"
                type="password"
                value={watch("password")}
                name="password"
                error={passwordError}
              />
              <ShowPasswordRegisterPageButton
                onClick={showPassword}
                className="password"
                error={passwordError}
              />
            </InputWrapper>
            {passwordError ? (
              <InputNotification
                text={passwordError}
                error={passwordError}
                color={"red"}
              />
            ) : (
              <InputNotification text={registerPageRules.PASSWORD} />
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
                value={watch("confirm")}
                error={confirmPasswordError}
              />
              <ShowPasswordRegisterPageButton
                onClick={showConfirmPassword}
                className="confirm-password"
                error={confirmPasswordError}
              />
            </InputWrapper>
            {confirmPasswordError ? (
              <InputNotification
                text={confirmPasswordError}
                error={confirmPasswordError}
                color={"red"}
              />
            ) : (
              <InputNotification text={registerPageRules.CONFIRM_PASSWORD} />
            )}
          </BlockInputWrapper>

          <button type="submit" disabled={!isValid}>
            Save
          </button>
        </Form>
      </VerifyWrapper>
      <AppToastContainer />
    </Container>
  );
}
