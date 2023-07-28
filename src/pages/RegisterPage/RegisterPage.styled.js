import styled from "@emotion/styled";

export const RegisterPageTitle = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  margin-top: 60px;
  color: gray;
  font-size: 36px;
  font-family: cursive;
`;

export const RegisterPageWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: rgba(247, 242, 242, 0.2);
  border: 2px solid ${(props) => props.theme.colors.border};
  border-radius: 4px;
  padding: 20px;
`;

export const RegisterPageForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

export const RegisterPageRedirectLinkWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterPageRedirectLink = styled.p`
  color: gray;
  font-family: cursive;
  font-size: 18px;
  text-decoration: underline;
  cursor: pointer;
`;
