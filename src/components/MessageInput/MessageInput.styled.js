import styled from "@emotion/styled";
import { BsSend } from "react-icons/bs";

import { ReactComponent as PinIcon } from "../../images/pin.svg";
import { ReactComponent as MicIcon } from "../../images/mic.svg";
import { ReactComponent as EmojiIcon } from "../../images/emoji.svg";
import { theme } from "theme";

export const StyledForm = styled.form`
width:100%;
  padding: 12px 24px;
  min-height: 60px;
  position:relative;
  border-radius: 24px;
  background: ${theme.colors.BTN_COLOR_HOVER};
`;

export const Input = styled.textarea`
  width: 100%;
  height: 36px ;
  padding: 10px 12px;
  border-radius: 24px;
  background: #f39f5a;
  font-size:12px;
  overflow:hidden;
  resize: none;
  margin-left: 20px;
  margin-right: 20px;
  ;
  outline:none;
  border:none;
color:white;
  &::placeholder {
    color: white;
    font-size: 12px;
    font-weight: 500;
  }
&:focus{
  outline:none;
  border:none;
}
  &[value] {
    color: white;
    font-size: 12px;
    font-weight: 500;
  }
`;
export const MessageLimitMessage=styled.p`
font-size:10px;
color:white;
opacity:0.5;
position:absolute;
left:55px;
bottom:5px;`

export const Pin = styled(PinIcon)`
  fill: white;
  width: 24px;
`;
export const Mic = styled(MicIcon)`
  width: 24px;
  margin-right: 10px;
`;
export const Emoji = styled(EmojiIcon)`
  position: absolute;
  bottom:5px;
  right: 80px;
  fill: #f39f5a;
  width: 24px;
`;

export const SendMessageButton = styled.button`
  height: 22px;
`;

export const SendMessageButtonIcon = styled(BsSend)`
  fill: #451952;
`;

export const InputWrapper = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
`;
