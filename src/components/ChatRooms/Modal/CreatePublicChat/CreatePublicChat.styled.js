import styled from "@emotion/styled";

export const Title = styled.p`
  text-align: center;
  margin-bottom: 20px;
  color: #696969;
  font-size: 18px;
  font-weight: 700;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Lable = styled.label`
  color: #696969;
  font-size: 14px;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  width: 343px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #f39f5a;

  background-color: #ececec;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-top: 30px;
`;

export const EditProfilePageFormInputAbout = styled.input`
  border-style: solid;
  border-width: 1px;
  border-radius: 15px;

  width: 343px;
  height: 56px;

  background-color: gray;

  padding: 6px 50px 6px 10px;

  &:hover {
    border-width: 2px;
  }
  &:focus {
    border-width: 2px;
  }

  &::placeholder {
    font-size: 18px;
    color: gray;
  }

  &[value] {
    font-size: 20px;

    color: ${({ theme, error }) =>
      error ? theme.colors.red[100] : theme.colors.gray[200]};
  }
`;

export const UploadPictureButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 62px;
  height: 62px;

  margin-bottom: 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  margin-bottom: 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;

  overflow: hidden;

  width: 62px;
  height: 62px;
`;

export const Image = styled.img`
  width: auto;
  height: 100%;
`;

export const UploadPhotoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 343px;
`;

export const UploadPhotoLable = styled.label`
  color: #696969;
  font-size: 14px;
  margin-bottom: 4px;
  align-self: flex-start;
`;
