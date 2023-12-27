import { AuthButton } from "components/AuthButton/AuthButton";
import { ForgotPasswordLink, SignUpBtn, Wrapper } from "./MainPage.styled";
import { Container } from "components/common/Container/Container.styled";
import { ReactComponent as TeamDisc } from "../../images/team-disc.svg";
export default function MainPage() {
  return (
    <Container>
      <Wrapper>
        <TeamDisc />
        <div>
          <p>Hi! You are at BuzzTalk messenger!</p>
          <p>Sign Up or Log In to start messaging.</p>
        </div>

        <SignUpBtn to="register">sign up</SignUpBtn>
        <AuthButton page="login" text="Log in" btnWidth={"165px"} />
        <ForgotPasswordLink to="/forgot-password">
          Forgot Password
        </ForgotPasswordLink>
      </Wrapper>
    </Container>
  );
}
