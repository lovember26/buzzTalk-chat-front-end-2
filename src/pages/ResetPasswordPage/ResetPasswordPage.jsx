import { Container } from "components/common/Container/Container.styled";
import {
  ForgotPassText,
  ForgotPassTitle,
} from "pages/ForgotPasswordPage/ForgotPasswordPage.styled";
import { StyledLink, VerifyWrapper } from "pages/VerifyPage/VerifyPage.styled";
import { ResetPasswordForm } from "./ResetPasswordPage.styled";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import { resetPassword } from "services/authApi";
import { errorNotification, successNotification } from "helpers/notification";

export const ResetPasswordPage = () => {
  const [searchParams] = useSearchParams();
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  const handleConfirmPassword = ({ target }) => {
    setConfirmPassword(target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await resetPassword({
        email,
        password,
        confirm_password,
        token,
      });
      successNotification("You have successfully changed your password.");
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
        <ResetPasswordForm onSubmit={handleSubmit}>
          <label htmlFor="new-password">New Password</label>
          <input
            type="passsword"
            name="new-password"
            value={password}
            onChange={handlePassword}
          />
          <p>*The password should be minimum 8 characters long</p>
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            type="confirm-passsword"
            name="confirm-password"
            value={confirm_password}
            onChange={handleConfirmPassword}
          />
          <button type="submit">Save</button>
        </ResetPasswordForm>
      </VerifyWrapper>
    </Container>
  );
};
