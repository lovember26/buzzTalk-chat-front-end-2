import styled from "@emotion/styled";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.div`
  width: 1104px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  /* align-item: center; */
  align-items: center;
  background: #d9d9d9;
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

export const StyledForm = styled.form`
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  position: relative;
  border-radius: 24px;
  background: #d9d9d9;
  padding: 13px 60px;
  input {
    width: 100%;
    height: 100%;
    padding-left: 10px;
    border-radius: 24px;
    background: #7d7d7d;
    border: none;
  }
  .pin {
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .mic {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .emoji {
    position: absolute;
    top: 19px;
    right: 68px;
  }
`;

export const MessageList = styled.ul`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px 20px;
  flex: 1 1 auto;
`;

export const MessageListItem = styled.li`
  border: 1px solid gray;
  border-radius: 15px;
  margin-bottom: 8px;
  padding: 8px 10px;
  width: fit-content;
`;

export const MessageListItemUsername = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const MessageListItemMessage = styled.p``;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  min-height: 100%;
`;
