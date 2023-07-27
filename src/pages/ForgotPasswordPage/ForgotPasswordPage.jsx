import { Container } from "components/common/Container/Container.styled";

import { StyledLink, VerifyWrapper } from "pages/VerifyPage/VerifyPage.styled";
import {
  ForgotPassForm,
  ForgotPassText,
  ForgotPassTitle,
} from "./ForgotPasswordPage.styled";
import { resetPasswordToken } from "services/authApi";

export const ForgotPasswordPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;

    resetPasswordToken({ email });
  };
  return (
    <Container>
      <VerifyWrapper>
        <StyledLink to="/">Logo</StyledLink>
        <ForgotPassTitle>Forgot Password</ForgotPassTitle>
        <ForgotPassText>Enter the email used for registration.</ForgotPassText>
        <ForgotPassText>We'll send you a password reset link.</ForgotPassText>
        <ForgotPassForm onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" />
          <button type="submit">Reset password</button>
        </ForgotPassForm>
      </VerifyWrapper>
    </Container>
  );
};
