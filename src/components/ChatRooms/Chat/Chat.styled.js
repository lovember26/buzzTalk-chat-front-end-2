import styled from "@emotion/styled";
import { BsReply } from "react-icons/bs";

export const ChatBlockWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  padding-top: 0;
  padding-bottom: 28px;
  padding-left: 16px;
  padding-right: 16px;

  flex: 1;
`;

export const DateNowText = styled.p`
  margin-left: auto;
  margin-right: auto;
  padding-top: 8px;
  margin-bottom: 8px;

  color: #696969;
  font-size: 14px;
  font-weight: 700;
`;

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperUsername = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
`;

export const Wrp = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledHeader = styled.div`
  width: 1104px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.purple};
`;

export const UserBar = styled.div`
  padding-left: 30px;
  display: flex;
  align-items: center;
  gap: 10px;

  .user {
    display: flex;
    flex-direction: column;
    gap: 7px;
    color: #444;
    .username {
      font-size: 14px;
    }

    .user-status {
      font-size: 12px;
    }
  }
`;

export const ActionBar = styled.ul`
  display: flex;
  gap: 12px;
  padding: 29px 30px 29px 0;
`;

export const MessageList = styled.ul`
  display: flex;
  flex-direction: column;

  max-height: 550px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    /* If scrolling is not visible */
    /* width: 0; */
    width: 10px;
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

export const MessageListItem = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 8px;
  padding: 8px 10px;
  /* To expand a block by its contents */
  /* width: fit-content; */
  width: 100%;
`;

export const MessageListItemUsernameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-bottom: 2px;
`;

export const MessageListItemUsername = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #696969;
`;

//A round picture in a block
export const MessageListItemUsernameImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;

  margin-right: 10px;
`;

export const MessageListItemUsernameImage = styled.img`
  width: auto;
  height: 100%;
`;
//A round picture in a block

export const MessageListItemMessage = styled.p`
  margin-bottom: 4px;
  font-size: 16px;
  color: #696969;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  min-height: 100%;
`;

export const Timestamp = styled.p`
  align-self: flex-end;
  margin-right: 8px;
`;

export const ReplyButton = styled.button`
  align-self: flex-end;
  cursor: pointer;
`;

export const ReplyIcons = styled(BsReply)`
  width: 24px;
`;

export const TimestampWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const MessageInputWrapper = styled.div`
  position: absolute;
  bottom: 20px;

  display: flex;
  flex-direction: column;

  background-color: lightgray;

  border-radius: 24px;
`;

export const ReplyToText = styled.p``;

export const ReplyInputWrapper = styled.div`
  padding-top: 12px;
  padding-left: 34px;
  padding-right: 34px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 12px;
`;

// Reply

export const MessageListItemReply = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 8px;
  padding: 8px 10px;
  /* To expand a block by its contents */
  /* width: fit-content; */
  width: 100%;
`;

export const MessageListItemUsernameImageReply = styled.img`
  width: auto;
  height: 100%;
`;

export const MessageListItemMessageReply = styled.p`
  margin-bottom: 4px;

  font-size: 16px;
  color: #696969;
`;

export const WrpReply = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 2px;
`;

export const TimestampReply = styled.p`
  align-self: flex-end;
  margin-right: 8px;
`;

export const MessageListItemUsernameImageWrapperReply = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 50px;
  height: 50px;
  overflow: hidden;
  border-radius: 50%;

  margin-right: 10px;
`;

export const MessageListItemUsernameWrapperReply = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const WrapperUsernameReply = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;

  /* margin-left: 10px; */
`;

export const MessageListItemUsernameReply = styled.p`
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 6px;
  color: #696969;
`;

export const TimestampWrapperReply = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ReplyIconsReply = styled(BsReply)`
  width: 24px;
`;

export const WrapperSecond = styled.div`
  display: flex;
`;

export const LineReply = styled.div`
  width: 4px;
  height: 33px;
  border-radius: 3px;

  background-color: #696969;

  margin-right: 10px;
`;

export const WhoReply = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #696969;

  margin-bottom: 6px;
`;

export const TextReply = styled.p`
  font-size: 16px;
  color: #696969;

  margin-bottom: 6px;
`;
