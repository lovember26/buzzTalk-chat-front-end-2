import { Container } from "components/common/Container/Container.styled";
import {
  ResendText,
  VerifyButton,
  VerifyText,
  VerifyTitle,
} from "./VerifyPage.styled";

import { resendEmail } from "services/authApi";
import { useSearchParams } from "react-router-dom";
import { Wrapper } from "pages/RegisterPage/RegisterPage.styled";
import { ReactComponent as WomanBig } from "../../images/woman-big.svg";
import { ReactComponent as WomanSmall } from "../../images/woman-small.svg";
import { useEffect, useState } from "react";

export default function VerifyPage() {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const handleClick = () => {
    resendEmail({ email });
  };
  return (
    <Container>
      <Wrapper>
        <VerifyTitle>
          Sign up<span> is successful!</span>
        </VerifyTitle>
        <VerifyText>
        Follow the link provided in your email to complete the registration
        </VerifyText>
        {isSmallScreen ? (
        <WomanSmall/>
      ) : (
        <WomanBig/>
      )}
        <ResendText>Haven't received the email in 3 minutes?</ResendText>
        <ResendText>Request a new confirmation with button below</ResendText>
        <VerifyButton type="button" onClick={handleClick}>
          Resend Confirmation Email
        </VerifyButton>
      </Wrapper>
    </Container>
  );
}
