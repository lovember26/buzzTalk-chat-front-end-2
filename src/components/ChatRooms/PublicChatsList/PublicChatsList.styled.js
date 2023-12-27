import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ChatList = styled.ul`
  max-height: 500px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    /* If scrolling is not visible */
    width: 0;
  }

  ::-webkit-scrollbar-track {
    background: whitesmoke;
    border-radius: 8px;
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

export const ChatItemImageWrapper = styled.div`
  border-radius: 50%;
  width: 37px;
  height: 37px;
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ChatItemImage = styled.img`
  width: auto;
  height: 100%;
`;
