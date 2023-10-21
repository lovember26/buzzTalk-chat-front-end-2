import styled from "@emotion/styled";
import { TEXT_COLOR } from "constants";
import { Link } from "react-router-dom";

export const Wrapper = styled.div``;

export const WelcomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const WelcomePageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
  margin-top: 100px;
  margin-bottom: 80px;
  color: ${TEXT_COLOR};
  font-size: 20px;
  font-weight: 600;
`;

export const LoginPageLinkForgotPassword = styled(Link)`
  color: ${TEXT_COLOR};

  font-size: 16px;
  text-decoration: underline;
`;
