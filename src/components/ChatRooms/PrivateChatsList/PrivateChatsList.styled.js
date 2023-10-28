import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ChatList = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ChatItem = styled.li``;

export const ChatItemInfo = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const ChatItemImageWrapper = styled.div`
  border-radius: 50%;
  width: 28px;
  height: 28px;
  overflow: hidden;

  margin-right: 8px;
`;

export const ChatItemImage = styled.img`
  width: auto;
  height: 100%;
`;

export const ChatItemText = styled.p`
  color: white;
`;
