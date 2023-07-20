import styled from "@emotion/styled";
import { AiFillDelete } from "react-icons/ai";

export const ItemsPageList = styled.ul`
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  list-style: none;
`;

export const ItemsPageItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  margin-bottom: 10px;
  border: 1px solid gray;
`;

export const ItemsPageText = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 40px;
  font-family: cursive;
  font-size: 18px;
  color: gray;
`;

export const ItemsPageIconDelete = styled(AiFillDelete)`
  color: gray;

  &:hover,
  &:focus {
    color: lightgreen;
  }
`;
