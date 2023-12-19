import styled from "@emotion/styled";

export const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 80px;

  padding-left: 26px;
  padding-right: 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #451952;
`;
export const UserBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserBarImageWrapper = styled.div`
  width: 40px;
  height: 40px;

  border-radius: 50%;
  overflow: hidden;
`;

export const UserBarImage = styled.img`
  width: auto;
  height: 100%;
`;

export const UserBarInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
  color: #444;
`;

export const UserBarUserName = styled.p`
  font-size: 16px;
  font-weight: 900px;
  color: #d9d9d9;
`;

export const UserBarUserStatus = styled.p`
  font-size: 12px;
  rgba(255, 255, 255, 0.30);
`;

export const Indicator = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;

  background-color: green;
  margin-left: 6px;
`;

export const UserStatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ActionBar = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: inherit;
`;

export const ActionBarItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
