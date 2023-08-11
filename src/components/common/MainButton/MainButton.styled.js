import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;
  align-items: center;
  height: 48px;
  width: 150px;

  color: ${({ theme }) => theme.colors.white[100]};
  background-color: ${({ theme }) => theme.colors.black[100]};

  border: 1px solid gray;
  border-radius: 30px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.gray[400]};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
`;
