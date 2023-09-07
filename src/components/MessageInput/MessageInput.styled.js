import styled from "@emotion/styled";

export const StyledForm = styled.form`
  position: relative;
  height: 60px;
  margin: 200px 16px 30px 16px;
  border-radius: 24px;
  background: #d9d9d9;
  padding: 13px 60px;
  input {
    width: 100%;
    height: 100%;
    padding-left: 10px;
    border-radius: 24px;
    background: #7d7d7d;
    border: none;
  }
  .pin {
    position: absolute;
    top: 20px;
    left: 20px;
  }
  .mic {
    position: absolute;
    top: 20px;
    right: 20px;
  }
  .emoji {
    position: absolute;
    top: 19px;
    right: 68px;
  }
`;
