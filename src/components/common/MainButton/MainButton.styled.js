import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  height: 48px;
  width: 150px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white[100]};
  background-color: ${({ theme }) => theme.colors.BTN_COLOR};

  border: 1px solid ${({ theme }) => theme.colors.BTN_COLOR};
  border-radius: 30px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[300]};
    border-color: grey;
  }
`;
