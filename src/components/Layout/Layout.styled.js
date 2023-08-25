import styled from "@emotion/styled";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.backgroundHeader};
  border-bottom: 1px solid gray;
  height: 220px;
  background: ${({ theme }) => theme.gradients.main};
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
`;

export const LogoTitle = styled.p`
  text-align: center;
  color: black;
  font-size: 50px;
  font-family: cursive;
  font-weight: 800;
`;
