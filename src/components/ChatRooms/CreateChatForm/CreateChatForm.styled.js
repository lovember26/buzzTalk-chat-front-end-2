import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;

  /* padding-top: 46px; */
  padding-top: 20px;
  padding-left: 28px;
  padding-right: 28px;
  padding-bottom: 20px;
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
  width: 343px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #f39f5a;

  margin-bottom: 16px;
  background-color: #ececec;
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

export const ButtonForPublic = styled.button`
  padding: 15px 26px;
  border-radius: 12px;
  color: white;
  font-size: 14px;
  background-color: #451952;
  margin-right: 10px;

  cursor: pointer;
`;

export const ButtonForPrivate = styled.button`
  padding: 15px 26px;
  border-radius: 12px;
  color: white;
  font-size: 14px;
  background-color: #f39f5a;

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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  margin-bottom: 20px;
  color: #696969;
  font-size: 18px;
  font-weight: 700;
`;

export const Lable = styled.label`
  color: #696969;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const InputWrapper = styled.div`
  display: flex;
  /* justify-content: center;
  align-items: center; */
  flex-direction: column;
`;
