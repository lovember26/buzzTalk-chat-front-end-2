import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NoFriendsWrap = styled.div`
  padding: 8px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.BTN_COLOR};
  p {
    margin: 0;
    font-size: 10px;
    color: #fff;
  }`

 export const StyledLink=styled(NavLink)`
    border-radius: 24px;
    background: ${({ theme }) => theme.colors.TITLE_COLOR};
    padding: 5px 45px;
    font-size: 10px;
    font-weight: 600;
    color: #fff;
  
`;
