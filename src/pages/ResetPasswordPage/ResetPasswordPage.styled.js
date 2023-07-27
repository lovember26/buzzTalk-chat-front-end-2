import styled from "@emotion/styled";

export const ResetPasswordForm = styled.form`
  margin-top: 24px;

  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
  }
  input {
    padding-left: 16px;
    width: 343px;
    height: 56px;
    border: none;
    border-radius: 15px;
    background: #ebebeb;
  }
  button {
    margin-top: 24px;
    width: fit-content;
    align-self: center;
    padding: 12px 60px;
    font-size: 14px;
    border-radius: 24px;
    background: #000;
    color: #fff;
  }
`;
