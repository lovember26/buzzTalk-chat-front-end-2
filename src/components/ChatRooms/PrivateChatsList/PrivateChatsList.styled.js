import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ChatList = styled.ul`
  display: flex;
  flex-direction: column;

  max-height: 500px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-track {
    background: whitesmoke;
    border-radius: 8px;
    /* box-shadow: 0 0 2px rgba(0, 0, 0, 0.1) inset; */
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border: 3px solid transparent;
    border-radius: 8px;
    background-clip: content-box;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: purple;
  }
`;

export const ChatItem = styled.li`
  margin-bottom: 8px;
`;

export const ChatItemInfo = styled(NavLink)`
  display: flex;
  align-items: center;
`;

export const ChatItemImageWrapper = styled.div`
  border-radius: 50%;
  width: 37px;
  height: 37px;
  overflow: hidden;

  margin-right: 10px;
`;

export const ChatItemImage = styled.img`
  width: auto;
  height: 100%;
`;

export const ChatItemText = styled.p`
  color: white;
  font-size: 12px;
`;
