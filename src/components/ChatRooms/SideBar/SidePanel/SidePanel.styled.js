import styled from "@emotion/styled";

export const StyledSideBar = styled.aside`
  display: flex;
`;

export const StyledNav = styled.nav`
  width: 80px;
  height: 100vh;
  padding: 22px 21px 0 22px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  background-color: #696969;
`;

export const StyledChatsBtn = styled.button`
  padding-bottom: 13px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.51);
`;

export const SearchBar = styled.div`
  width: 256px;
  padding: 27px 16px;
  background: #7d7d7d;
  p {
    color: #fff;
    font-size: 18px;
    margin-bottom: 8px;
  }
  form {
    position: relative;
    svg {
      position: absolute;
      left: 12px;
      top: 8px;
    }
  }
  input {
    width: 224px;
    height: 33px;
    padding: 12px 12px 12px 31px;
    margin-bottom: 11px;
    border-radius: 24px;
    background: #696969;
    border: none;
    color: #fff;
    font-size: 10px;
    &::placeholder {
      color: #fff;
      font-size: 10px;
    }
  }
`;

export const NavButtons = styled.nav`
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
`;
