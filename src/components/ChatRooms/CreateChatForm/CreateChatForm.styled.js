import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  padding-top: 46px;
  padding-left: 28px;
  padding-right: 28px;

  width: 525px;
  /* height: 373px; */
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Select = styled.select`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 400px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid gray;

  margin-bottom: 16px;
`;

export const Button = styled.button`
  /* position: absolute;
  right: 0;
  bottom: 0; */
  padding: 15px 26px;
  border-radius: 12px;
  color: white;
  font-size: 14px;
  background-color: #451952;

  cursor: pointer;
`;

export const ButtonBack = styled.button`
  /* position: absolute;
  left: 0;
  bottom: 0; */
  color: #d9d9d9;
  font-size: 14px;

  margin-right: 290px;

  cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
  /* position: relative; */
  display: flex;
  /* flex-direction: row; */
  /* justify-content: space-between; */
  /* align-items: center; */
`;

export const Text = styled.p`
  margin-bottom: 10px;
`;
