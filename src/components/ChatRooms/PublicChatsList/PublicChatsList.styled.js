import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const PublicChatItem = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 37px;
  height: 37px;
  border: 2px solid white;
  border-radius: 50%;
  color: white;

  margin-bottom: 6px;
`;
