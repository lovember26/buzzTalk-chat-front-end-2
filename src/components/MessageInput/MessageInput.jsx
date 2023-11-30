import {
  StyledForm,
  SendMessageButton,
  SendMessageButtonIcon,
  Pin,
  Mic,
  Emoji,
  InputWrapper,
  Input,
} from "./MessageInput.styled";

export const MessageInput = ({ onSubmit, onChange, value }) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <InputWrapper>
        <Pin />
        <Input onChange={onChange} value={value} placeholder="Message"></Input>
        <Emoji />
        <Mic />
        <SendMessageButton>
          <SendMessageButtonIcon size={22} />
        </SendMessageButton>
      </InputWrapper>
    </StyledForm>
  );
};
