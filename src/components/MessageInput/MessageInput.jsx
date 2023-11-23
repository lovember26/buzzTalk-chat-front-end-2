import {
  StyledForm,
  SendMessageButton,
  SendMessageButtonIcon,
} from "./MessageInput.styled";
import { ReactComponent as PinIcon } from "../../images/pin.svg";
import { ReactComponent as MicIcon } from "../../images/mic.svg";
import { ReactComponent as EmojiIcon } from "../../images/emoji.svg";

export const MessageInput = ({ onSubmit, onChange, value }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <PinIcon className="pin" />
      <input onChange={onChange} value={value} placeholder="Message"></input>
      <EmojiIcon className="emoji" />

      <MicIcon className="mic" />
      <SendMessageButton>
        <SendMessageButtonIcon size={22} />
      </SendMessageButton>
    </StyledForm>
  );
};
