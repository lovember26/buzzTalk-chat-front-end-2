import styled from "@emotion/styled";
import { AiFillEye } from "react-icons/ai";

export const Wrapper = styled.div`
  &.active {
    &::after {
      opacity: 0;
    }
  }

  &::after {
    position: absolute;
    content: "";
    top: 27px;
    right: 13px;
    width: 28px;
    height: 2px;

    background-color: ${({ error, theme }) =>
      error ? theme.colors.red[200] : theme.colors.white[100]};

    transform: rotate(45deg);
    transition: 0.3s all ease;
    opacity: 1;
    @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
      background-color: ${({ error, theme }) =>
        error ? theme.colors.red[200] : theme.colors.black[100]};
    }
  }
`;

export const ShowPasswordIcon = styled(AiFillEye)`
  position: absolute;
  top: 13px;
  right: 12px;
  cursor: pointer;

  color: ${({ error, theme }) =>
    error ? theme.colors.red[200] : theme.colors.white[100]};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    color: ${({ error, theme }) =>
      error ? theme.colors.red[200] : theme.colors.black[100]};
  }
`;
