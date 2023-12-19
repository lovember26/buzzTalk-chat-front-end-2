import styled from "@emotion/styled";
import { BsSend } from "react-icons/bs";

// import { TiMicrophoneOutline } from "react-icons/ti";
// import { CiFaceSmile } from "react-icons/ci";

export const StyledForm = styled.form`
  position: relative;
  margin-top: auto;
  height: 60px;

  border-radius: 24px;
  background: #7e5d88;
  padding: 13px 90px 13px 60px;

  input {
    width: 100%;
    height: 100%;
    padding: 10px 12px;
    border-radius: 24px;
    background: #f39f5a;
    border: none;

    &::placeholder {
      color: white;
      font-size: 14px;
      font-weight: 500;
    }

    &[value] {
      color: white;
      font-size: 14px;
      font-weight: 500;
    }
  }
  .pin {
    position: absolute;
    top: 17px;
    left: 20px;
    fill: white;
  }
  .mic {
    position: absolute;
    top: 17px;
    right: 50px;
  }
  .emoji {
    position: absolute;
    top: 20px;
    right: 100px;
    fill: #f39f5a;
  }
`;
export const SendMessageButton = styled.button`
  position: absolute;
  top: 18px;
  right: 20px;
`;

export const SendMessageButtonIcon = styled(BsSend)`
  fill: #451952;
`;
