import styled from "@emotion/styled";
import { Link, NavLink } from "react-router-dom";
import { RiContactsLine } from "react-icons/ri";

export const StyledSideBar = styled.aside`
  display: flex;
  background-color: #451952;
`;

export const StyledNav = styled.nav`
  width: 80px;
  height: 100vh;
  padding: 22px 21px 0 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};
`;

export const StyledChatsBtn = styled(NavLink)`
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.51);
`;

export const SearchBar = styled.div`
  width: 256px;
  padding: 27px 16px;
  background: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
`;

export const Title = styled.p`
  color: #fff;
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  position: relative;
  svg {
    position: absolute;
    left: 12px;
    top: 8px;
  }
`;

export const SearchInput = styled.input`
  background-color: #451952;

  width: 224px;
  height: 33px;
  padding: 12px 12px 12px 31px;
  margin-bottom: 8px;
  border-radius: 24px;
  background: ${({ theme }) => theme.colors.BTN_COLOR};
  border: none;
  color: #fff;
  font-size: 10px;
  &::placeholder {
    color: #fff;
    font-size: 12px;
  }
`;

export const FriendsLinkWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  width: 224px;
  height: 33px;
  background-color: #451952;
  border-radius: 10px;
  border: none;
  padding: 8px 12px;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const ContactIcon = styled(RiContactsLine)`
  fill: white;
  margin-right: 8px;
`;

export const FriendsLink = styled(Link)`
  color: white;
  font-size: 12px;
`;

export const AddChatButtonWrapper = styled.button`
  border-radius: 50%;
  /* width: 37px;
  height: 37px; */
  overflow: hidden;

  width: 34px;
  height: 34px;
`;
