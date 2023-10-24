import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const StyledAuthButton = styled(Link)`
  cursor: pointer;
  padding: 12px 50px;
  border-radius: 24px;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes[3]};
  text-transform: capitalize;
  color: ${({ theme }) => theme.colors.white[100]};
  background: ${({ theme }) => theme.colors.BTN_COLOR};
  text-decoration: none;
  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
  }
`;
