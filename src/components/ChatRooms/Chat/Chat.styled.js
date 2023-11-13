import styled from "@emotion/styled";

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
  /* justify-content: flex-end;
  align-items: flex-start; */
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

  margin-bottom: 20px;
  padding: 10px 20px;
  flex: 1 1 auto;

  max-height: 630px;
  /* max-height: 100%; */
  overflow-y: scroll;
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
`;

export const MessageListItemUsername = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 6px;
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

  margin-right: 8px;
`;

export const MessageListItemUsernameImage = styled.img`
  width: auto;
  height: 100%;
`;
//A round picture in a block

export const MessageListItemMessage = styled.p`
  margin-bottom: 4px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  min-height: 100%;
`;

export const Timestamp = styled.p`
  align-self: flex-end;
`;