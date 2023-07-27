import { Container } from "components/common/Container/Container.styled";
import {
  ResendText,
  StyledLink,
  VerifyButton,
  VerifyText,
  VerifyTitle,
  VerifyWrapper,
} from "./VerifyPage.styled";

export const VerifyPage = () => {
  return (
    <Container>
      <VerifyWrapper>
        <StyledLink to="/">Logo</StyledLink>
        <VerifyTitle>
          Sign up<span>is successful!</span>
        </VerifyTitle>
        <VerifyText>
          Find and follow the link provided in your email to complete the
          registration
        </VerifyText>
        <ResendText>Haven't received the email in 3 minutes?</ResendText>
        <ResendText>Request a new confirmation with button below</ResendText>
        <VerifyButton type="button">Resend Confirmation Email</VerifyButton>
      </VerifyWrapper>
    </Container>
  );
};
