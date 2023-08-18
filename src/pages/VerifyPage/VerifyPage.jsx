import { Container } from "components/common/Container/Container.styled";
import {
  ResendText,
  VerifyButton,
  VerifyText,
  VerifyTitle,
  VerifyWrapper,
} from "./VerifyPage.styled";

import { resendEmail } from "services/authApi";
import { useSearchParams } from "react-router-dom";

export const VerifyPage = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const handleClick = () => {
    resendEmail({ email });
  };
  return (
    <Container>
      <VerifyWrapper>
        <VerifyTitle>
          Sign up<span>is successful!</span>
        </VerifyTitle>
        <VerifyText>
          Find and follow the link provided in your email to complete the
          registration
        </VerifyText>
        <ResendText>Haven't received the email in 3 minutes?</ResendText>
        <ResendText>Request a new confirmation with button below</ResendText>
        <VerifyButton type="button" onClick={handleClick}>
          Resend Confirmation Email
        </VerifyButton>
      </VerifyWrapper>
    </Container>
  );
};
