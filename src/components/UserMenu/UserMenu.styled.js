import styled from "@emotion/styled";
import { FaUserCircle } from "react-icons/fa";

export const UserMenuWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FaUserCircleIcon = styled(FaUserCircle)`
  color: darkturquoise;
  margin-right: 10px;
`;

export const UserMenuText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 40px;
  font-family: cursive;
  font-size: 18px;
  color: gray;
`;

export const UserMenuButton = styled.button`
  padding: 8px 12px;
  border: 1px solid gray;
  border-radius: 30px;
  font-size: 16px;
  background-color: rgba(247, 242, 242, 0.3);
  color: dimgray;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: lightgreen;
  }
`;
