import { Container } from "components/common/Container/Container.styled";
import { successNotification, errorNotification } from "helpers/notification";

import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { inputEmailSchema } from "middlewares";
import { registerPageRules } from "constants";
import { InputNotification } from "components/common/InputNotification/InputNotification";
import { selectInputNotification } from "helpers/selectWrongPasswordNotification";
import { resetPasswordToken } from "services/authApi";
import { VerifyWrapper } from "pages/VerifyPage/VerifyPage.styled";
import {
  ForgotPassText,
  ForgotPassTitle,
  Form,
  BlockInputWrapper,
  Lable,
  InputWrapper,
  Input,
  Icon,
} from "./ForgotPasswordPage.styled";
import { AppToastContainer } from "components/AppToastContainer/AppToastContainer";

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
      <VerifyWrapper>
        <ForgotPassTitle>Forgot Password</ForgotPassTitle>
        <ForgotPassText>Enter the email used for registration.</ForgotPassText>
        <ForgotPassText>We'll send you a password reset link.</ForgotPassText>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <BlockInputWrapper>
            <Lable htmlFor="test" error={error}>
              Email
            </Lable>
            <InputWrapper>
              <Input
                {...register("email")}
                type="email"
                error={error}
                placeholder={"Enter an email"}
              />
              <Icon size={28} error={error} />
            </InputWrapper>
            {error ? (
              <InputNotification text={error} color={"red"} />
            ) : (
              <InputNotification
                text={registerPageRules.EMAIL}
                color={"gray"}
              />
            )}
          </BlockInputWrapper>

          <button type="submit" disabled={!isValid}>
            Reset password
          </button>
        </Form>
      </VerifyWrapper>
      <AppToastContainer />
    </Container>
  );
}
