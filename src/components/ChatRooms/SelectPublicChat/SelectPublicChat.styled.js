import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import Select from "react-select";

import {
  SortableContainer,
} from "react-sortable-hoc";

const SortableSelect = SortableContainer(Select);

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

// export const SelectWrapper = styled(Select)`
//   width: 400px;
//   margin-bottom: 16px;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   &:placeholder {
//     font-size: 10px;
//   }
// `;

export const SelectWrapper = styled(SortableSelect)`
  width: 400px;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:placeholder {
    font-size: 10px;
  }
`;
