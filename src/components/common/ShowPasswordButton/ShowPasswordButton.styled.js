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
    top: 16px;
    right: 10px;
    width: 28px;
    height: 2px;
    background-color: lightgray;
    transform: rotate(45deg);
    transition: 0.3s all ease;
    opacity: 1;
  }
`;

export const ShowPasswordIcon = styled(AiFillEye)`
  position: absolute;
  top: 5px;
  right: 12px;
  color: lightgray;
  cursor: pointer;
`;
