import { useEffect, useState } from "react";
import {
  StyledForm,
  SendMessageButton,
  SendMessageButtonIcon,
  Pin,
  Mic,
  Emoji,
  InputWrapper,
  Input,
  MessageLimitMessage,
} from "./MessageInput.styled";

export const MessageInput = ({ onSubmit, onChange, value}) => {
  const [showMessage, setShowMessage] = useState(false);
const [heightIncrease, setHeightIncrease]=useState(false);
  const autoResize = (e) => {
    const textarea = e.target;
    textarea.style.height = 'auto'; // Спочатку встановлюємо висоту на автоматичну
    textarea.style.height = textarea.scrollHeight + 'px'; // Задаємо висоту на основі вмісту

  };
  useEffect(()=>{
    if(value===''){
      setShowMessage(false);
    }
  },[value])
  
  const handleInput=(e)=>{
   
    const inputValue = e.target.value;
    if (inputValue.length <= 4000) {
      onChange(e);
      autoResize(e);
      setShowMessage(false);
     setHeightIncrease(false);
    } else  if (!heightIncrease){
      
      const currentHeight = e.target.scrollHeight;
      const newHeight = currentHeight + 10;
      e.target.style.height = newHeight + "px";
      setShowMessage(true);
     setHeightIncrease(true);
    }
  }
  const handleSubmit=(e)=>{
   
    onSubmit(e);
    setShowMessage(false);
    // const textarea = e.target;
    // textarea.style.height = '36px';
  }
  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputWrapper>
        <Pin />
        <Input onChange={handleInput} value={value} placeholder="Message"></Input>
        <Emoji />
        <Mic />
        <SendMessageButton>
          <SendMessageButtonIcon size={22} />
        </SendMessageButton>
        {showMessage && <MessageLimitMessage>You’ve reached the limit of 4000 symbols</MessageLimitMessage>}
      </InputWrapper>
    </StyledForm>
  );
};
