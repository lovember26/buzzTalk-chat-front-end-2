import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const VerifyTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #0dc841;
  text-align: center;
  font-size: 24px;

  margin-bottom: 40px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    margin-top: 24px;
  }
`;

export const VerifyText = styled.p`
  margin-bottom: 60px;
  font-size: 16px;
  text-align: center;
`;

export const ResendText = styled.p`
  color: #fff;
  font-size: 12px;
  text-align: center;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 14px;
    color: #777;
  }
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
