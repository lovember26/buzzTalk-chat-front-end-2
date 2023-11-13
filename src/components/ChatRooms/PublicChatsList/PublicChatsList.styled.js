import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const PublicChatItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  border: 2px solid white;
  border-radius: 50%;
  color: white;
  overflow: hidden;
  font-size: 12px;

  margin-bottom: 6px;
`;
