import styled from "@emotion/styled";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-self: center;

  padding: 8px 18px;
  margin-bottom: 15px;
  border: 1px solid gray;
  border-radius: 30px;
  background-color: whitesmoke;

  font-family: cursive;
  font-size: 18px;
  color: gray;
  text-decoration: none;

  &:hover,
  &:focus {
    background-color: lightgreen;
  }

  &:disabled {
    background-color: lightgray;
  }
`;
