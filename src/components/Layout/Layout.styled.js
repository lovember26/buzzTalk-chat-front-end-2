import styled from "@emotion/styled";

export const Header = styled.header`
  padding: 30px 16px 10px 16px;
  background-color: ${({ theme }) => theme.colors.MAIN_COLOR};

  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    .small-logo {
      display: none;
    }
    height: 219px;
    padding: 77px 16px;
  }
`;

export const LogoWrapper = styled.div`
  display: none;
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    display: flex;
    justify-content: center;
    gap: 20px;
    h1 {
      color: ${({ theme }) => theme.colors.TITLE_COLOR};
      font-size: 50px;
      font-weight: 600;
    }
  }
`;
