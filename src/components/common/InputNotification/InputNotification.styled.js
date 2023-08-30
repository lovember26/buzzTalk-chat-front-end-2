import styled from "@emotion/styled";

export const Text = styled.p`
  font-family: cursive;
  font-size: 14px;
  text-decoration: none;

  color: ${({ error, theme, wrong }) => {
    if (error && wrong < 3) {
      return theme.colors.red[100];
    }

    if (wrong >= 3) {
      return theme.colors.gray[200];
    }

    return theme.colors.gray[200];
  }};
`;
