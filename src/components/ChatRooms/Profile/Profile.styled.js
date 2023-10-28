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
  align-items: center;
  background: #d9d9d9;
`;
export const UserBarWrapper = styled.div`
  padding-left: 30px;
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
  color: #444;
`;

export const UserBarUserName = styled.p`
  font-size: 16px;
  font-weight: 900px;
  color: black;
`;

export const UserBarUserStatus = styled.p`
  font-size: 12px;
`;

export const ActionBar = styled.ul`
  display: flex;
  gap: 12px;
  padding: 29px 30px 29px 0;
`;
