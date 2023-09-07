import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Wrapper = styled.div``;

export const WelcomePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WelcomePageTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 80px;
`;

export const WelcomePageText = styled.p`
  text-align: center;
  color: black;
  font-size: 36px;
  font-family: cursive;
`;

export const LoginPageLinkForgotPassword = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  color: black;
  font-family: cursive;
  font-size: 18px;
  text-decoration: underline;
`;
