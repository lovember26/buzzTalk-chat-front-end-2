import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import Select from "react-select";

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

export const SelectWrapper = styled(Select)`
  width: 400px;
  margin-bottom: 16px;
`;
