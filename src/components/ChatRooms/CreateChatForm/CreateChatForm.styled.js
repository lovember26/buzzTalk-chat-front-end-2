import styled from "@emotion/styled";

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 46px;
  padding-left: 80px;
  padding-right: 80px;
  padding-bottom: 55px;

  width: 525px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 343px;
`;

export const ButtonForPrivate = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  padding: 11px 25px;
  border-radius: 12px;
  color: #451952;
  font-size: 16px;
  font-weight: 600px;
  line-height: 19.5px;
  background-color: #7e5d88;

  width: 343px;
  height: 62px;

  cursor: pointer;
`;

export const ButtonForPublic = styled.button`
  position: relative;

  display: flex;
  align-items: center;

  padding: 11px 25px;
  margin-bottom: 26px;
  border-radius: 12px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600px;
  line-height: 19.5px;
  background-color: #f39f5a;

  width: 343px;
  height: 62px;

  cursor: pointer;
`;

export const ArrowRightButton = styled.button`
  position: absolute;
  right: 34px;

  cursor: pointer;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Line = styled.div`
  width: 350px;
  height: 1px;
  background-color: #696969;

  margin-top: 28px;
  margin-bottom: 28px;
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

export const ButtonBack = styled.button`
  /* position: absolute;
  left: 0;
  bottom: 0; */
  color: #d9d9d9;
  font-size: 14px;

  margin-right: 290px;

  cursor: pointer;
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

export const TextInfo = styled.p`
  color: #696969;
  font-size: 10px;
  font-weight: 500px;
`;
