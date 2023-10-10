import styled from "@emotion/styled";

export const NoFriendsWrap = styled.div`
  padding: 8px 34px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.crimson};
  p {
    margin: 0;
    font-size: 10px;
  }
  button {
    border-radius: 24px;
    background: ${({ theme }) => theme.colors.orange};
    padding: 5px 45px;
    font-size: 10px;
    font-weight: 600;
    color: #fff;
  }
`;
