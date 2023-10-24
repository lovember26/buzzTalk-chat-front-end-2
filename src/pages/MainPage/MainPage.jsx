import { AuthButton } from "components/AuthButton/AuthButton";
import { ForgotPasswordLink, SignUpBtn, Wrapper } from "./MainPage.styled";
import { Container } from "components/common/Container/Container.styled";

export default function MainPage() {
  return (
    <Container>
      <Wrapper>
        <p>
          <div>Hi! You are at BuzzTalk messenger!</div>
          <div>Sign Up or Log In to start messaging.</div>
        </p>
        <SignUpBtn to="register">sign up</SignUpBtn>
        <AuthButton page="login" text="Log in" btnWidth={"165px"} />
        <ForgotPasswordLink to="/forgot-password">
          Forgot Password
        </ForgotPasswordLink>
      </Wrapper>
    </Container>
  );
}
