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
  background-color: ${({ theme }) => theme.colors.pink};

  border: 1px solid gray;
  border-radius: 30px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.purple};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
`;
