import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const VerifyTitle = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #0dc841;
  text-align: center;
  font-size: 24px;

  margin-bottom: 16px;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display:block;
    margin-top: 24px;
    font-size: 32px;
  }
`;

export const VerifyText = styled.p`
display:none;
@media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
  display:block;
  width:316px;
  font-size: 16px;
  text-align: center;}
`;

export const ResendText = styled.p`
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 1.83;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    font-size: 14px;
    color: #777;
  }
`;

export const VerifyButton = styled.button`
  margin-top: 24px;
  border-radius: 24px;
  padding: 12px 50px;
  background: ${({ theme }) => theme.colors.pink};
  color: #fff;
  text-align: center;

  font-size: 14px;

  font-weight: 500;
  &:hover,&:focus{
    background: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
  }
`;

export const StyledLink = styled(Link)`
  font-size: 14px;
  color: #777;
  align-self: flex-start;
`;
