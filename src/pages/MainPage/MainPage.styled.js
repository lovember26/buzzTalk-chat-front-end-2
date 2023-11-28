import styled from "@emotion/styled";

import { Link } from "react-router-dom";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
 
  p {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
  }
`;
export const SignUpBtn = styled(Link)`
  cursor: pointer;
  margin-bottom: 16px;
  padding: 12px 50px;
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.white[100]};
  font-size: ${({ theme }) => theme.fontSizes[3]};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.white[100]};
  background: transparent;
  text-decoration: none;
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    color: ${({ theme }) => theme.colors.black[100]};
    border: 1px solid ${({ theme }) => theme.colors.black[100]};
  }
`;
export const ForgotPasswordLink = styled(Link)`
  cursor: pointer;
  margin-top: 16px;
  color: ${({ theme }) => theme.colors.white[100]};
  font-size: 16px;
  text-decoration: underline;
  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    color: ${({ theme }) => theme.colors.black[100]};
  }
`;
