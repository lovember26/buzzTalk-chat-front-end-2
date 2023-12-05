import styled from "@emotion/styled";

export const Button = styled.button`
  position: absolute;
  right: 47px;
  padding: 15px 26px;
  border-radius: 12px;
  color: white;
  font-size: 14px;
  background-color: #451952;

  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
`;
