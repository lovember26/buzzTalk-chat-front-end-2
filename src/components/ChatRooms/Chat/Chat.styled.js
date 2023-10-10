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
  align-item: center;
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
