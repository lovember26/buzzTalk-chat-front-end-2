import styled from "@emotion/styled";

export const UserProfileWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
  .showUserCard {
    cursor: pointer;
    border-top: 1px solid rgba(255, 255, 255, 0.51);

    padding-top: 13px;
  }
  img {
    border-radius: 50%;
    width: 37px;
    height: 37px;
  }
`;
export const UserCard = styled.div`
  position: absolute;
  width: 336px;
  padding: 3px 15px 22px 15px;
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.MAIN_COLOR};
  color: ${({ theme }) => theme.colors.white[100]};
  font-size: 12px;
  .hideUser {
    margin-bottom: 5px;
  }
  .userInfo {
    display: flex;
    justify-content: space-between;
  }
  .container {
    margin-top: 24px;
    margin-left: 14px;
    & a {
      color: #7b97f8;
      font-size: 10px;
    }
  }
  .userAvatar {
    cursor: pointer;
    border-top: 1px solid rgba(255, 255, 255, 0.51);
    width: 45px;
    display: flex;
    justify-content: center;
  }
  img {
    width: 37px;
    height: 37px;
    border-radius: 50%;
    margin-top: 16px;
  }
  .nameAndStatusWrapp {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-bottom: 7px;
  }
  .userName {
    font-size: 18px;
    font-weight: 600;
  }
  .text {
    color: ${({ theme }) => theme.colors.gray[300]};
    font-size: 10px;
  }
  .editBtn {
    display: flex;
    padding-top: 23px;
  }
  ul {
    margin-top: 26px;
    margin-bottom: 23px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }
  li {
    display: flex;
    align-items: center;

    border-bottom: 0.25px solid rgba(250, 250, 250, 0.5);
    button {
      margin-left: auto;
    }
  }
  .deleteBtn {
    align-self: start;
    margin-bottom: 14px;
  }
  .logOutBtn {
    align-self: start;
  }
`;
