import { Container } from "components/common/Container/Container.styled";
import { successNotification, errorNotification } from "helpers/notification";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { inputEmailSchema } from "middlewares";

import { InputNotification } from "components/common/InputNotification/InputNotification";
import { selectInputNotification } from "helpers/selectWrongPasswordNotification";
import { resetPasswordToken } from "services/authApi";
import { ReactComponent as Line } from "../../images/line-black.svg";
import {
  ForgotPassText,
  ForgotPassTitle,
  Form,
  BlockInputWrapper,
  InputWrapper,
  Input,
  Icon,
  SignUpLink,
} from "./ForgotPasswordPage.styled";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";
import { Label, Wrapper } from "pages/RegisterPage/RegisterPage.styled";

export default function ForgotPasswordPage() {
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
    const email = data.email;
    try {
      await resetPasswordToken({ email });
      successNotification("Check your email to reset password!");
      reset();
    } catch (error) {
      errorNotification(error.message);
    }
  };

  const error = selectInputNotification(errors["email"]);

  return (
    <Container>
      <Wrapper>
        <ForgotPassTitle>Forgot Password</ForgotPassTitle>
        <ForgotPassText>Enter the email used for registration.</ForgotPassText>
        <ForgotPassText>We'll send you a password reset link.</ForgotPassText>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <BlockInputWrapper>
            <Label htmlFor="test" error={error}>
              Email
            </Label>
            <InputWrapper>
              <Input {...register("email")} type="email" error={error} />
              <Icon size={28} error={error} />
            </InputWrapper>
            {error && <InputNotification text={error} color={"#BD2816"} />}
          </BlockInputWrapper>

          <button type="submit" disabled={!isValid}>
            Reset password
          </button>
        </Form>
        <SignUpLink to="/register">Back to Sign up</SignUpLink>
        <Line />
      </Wrapper>
      <AppToastContainer />
    </Container>
  );
}
