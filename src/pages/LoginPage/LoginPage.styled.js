import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const LoginPageTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 60px;
  color: gray;
  font-size: 36px;
  font-family: cursive;
`;

export const LoginPageWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgba(247, 242, 242, 0.2);
  border: 2px solid gray;
  border-radius: 5px;
  padding: 20px;
`;

export const LoginPageForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const LoginPageLinkForgotPassword = styled(Link)`
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
  color: gray;
  font-family: cursive;
  font-size: 18px;
  text-decoration: underline;
`;

export const LoginPageRedirectLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const LoginPageRedirectText = styled.p`
  margin-right: 5px;
  color: gray;

  font-family: cursive;
  font-size: 18px;
`;

export const LoginPageRedirectLink = styled.p`
  color: gray;
  font-family: cursive;
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
`;
