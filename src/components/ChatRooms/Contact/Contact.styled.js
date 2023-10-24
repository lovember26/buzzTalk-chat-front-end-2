import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ActiveChatInfo = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ActiveChatName = styled.ul`
  margin-left: 8px;
  color: white;
`;

export const ActiveChatWrapper = styled.li`
  margin-bottom: 8px;
`;
