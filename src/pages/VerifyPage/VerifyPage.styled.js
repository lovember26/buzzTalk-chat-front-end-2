import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const VerifyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 45px;
`;

export const VerifyTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #0dc841;
  text-align: center;
  font-size: 24px;
  margin-top: 24px;
  margin-bottom: 40px;
`;

export const VerifyText = styled.p`
  margin-bottom: 60px;
  font-size: 16px;
  text-align: center;
`;

export const ResendText = styled.p`
  color: #777;
  font-size: 12px;
  text-align: center;
`;

export const VerifyButton = styled.p`
  margin-top: 24px;
  border-radius: 24px;
  padding: 12px 50px;
  background: #444;
  color: #fff;
  text-align: center;

  font-size: 14px;

  font-weight: 500;
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  color: #777;
  align-self: flex-start;
`;
