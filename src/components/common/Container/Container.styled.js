import styled from "@emotion/styled";

export const Container = styled.div`
  min-height: 100vh;
  padding: 0 16px 30px 16px;
  background: ${({ theme }) => theme.colors.MAIN_COLOR};
  color: ${({ theme }) => theme.colors.white[100]};
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    background: ${({ theme }) => theme.colors.white[100]};
    color: ${({ theme }) => theme.colors.black[100]};
  }
`;
