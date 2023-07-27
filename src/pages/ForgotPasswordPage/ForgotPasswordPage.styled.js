import styled from "@emotion/styled";

export const ForgotPassTitle = styled.h1`
  margin: 24px 0;
  font-size: 24px;
`;

export const ForgotPassText = styled.p`
  color: #777;
  font-size: 14px;
  text-align: center;
`;
export const ForgotPassForm = styled.form`
  margin-top: 24px;

  display: flex;
  flex-direction: column;

  label {
    font-size: 16px;
  }
  input {
    margin-bottom: 16px;
    padding-left: 16px;
    width: 343px;
    height: 56px;
    border: none;
    border-radius: 15px;
    background: #ebebeb;
  }
  button {
    width: fit-content;
    align-self: center;
    padding: 12px 60px;
    font-size: 14px;
    border-radius: 24px;
    background: #000;
    color: #fff;
  }
`;
