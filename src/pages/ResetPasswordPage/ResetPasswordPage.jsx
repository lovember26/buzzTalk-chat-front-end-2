import { Container } from "components/common/Container/Container.styled";
import {
  Form,
  BlockInputWrapper,
  InputWrapper,
  Input,
} from "pages/ResetPasswordPage/ResetPasswordPage.styled";
import {
  ForgotPassTitle,
  ForgotPassText,
  SignUpLink,
} from "pages/ForgotPasswordPage/ForgotPasswordPage.styled";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ReactComponent as Line } from "../../images/line-black.svg";
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
import { Label, Wrapper } from "pages/RegisterPage/RegisterPage.styled";

export default function ResetPasswordPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
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
      navigate("/login", { replace: true });
      reset();
    } catch (error) {
      errorNotification(error.message);
    }
  };

  const passwordError = selectInputNotification(errors["password"]);
  const confirmPasswordError = selectInputNotification(errors["confirm"]);

  return (
    <Container>
      <Wrapper>
        <ForgotPassTitle>Enter New Password</ForgotPassTitle>
        <ForgotPassText>
          Your new password must be different
          <br /> from used password
        </ForgotPassText>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <BlockInputWrapper>
            <Label error={passwordError}>New Password</Label>
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
                color={"#BD2816"}
              />
            ) : (
              <InputNotification text={registerPageRules.PASSWORD} />
            )}
          </BlockInputWrapper>

          <BlockInputWrapper>
            <Label error={confirmPasswordError}>Confirm Password</Label>
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
                color={"#BD2816"}
              />
            ) : (
              <InputNotification text={registerPageRules.CONFIRM_PASSWORD} />
            )}
          </BlockInputWrapper>

          <button type="submit" disabled={!isValid}>
            Save
          </button>
        </Form>
        <SignUpLink to="/register">Back to Sign up</SignUpLink>
        <Line />
      </Wrapper>
      <AppToastContainer />
    </Container>
  );
}
