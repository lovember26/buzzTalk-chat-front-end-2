import { StyledForm } from "./MessageInput.styled";
import { ReactComponent as PinIcon } from "../../images/pin.svg";
import { ReactComponent as MicIcon } from "../../images/mic.svg";
import { ReactComponent as EmojiIcon } from "../../images/emoji.svg";

export const MessageInput = () => {
  return (
    <StyledForm>
      <PinIcon className="pin" />
      <input />
      <EmojiIcon className="emoji" />

      <MicIcon className="mic" />
    </StyledForm>
  );
};
