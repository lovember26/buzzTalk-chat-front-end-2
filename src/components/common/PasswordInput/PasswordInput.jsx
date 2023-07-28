import * as React from "react";
import { ShowPasswordButton } from "../ShowPasswordButton/ShowPasswordButton";
import {
  Wrapper,
  Lable,
  InputWrapper,
  Input,
  InputRuleText,
} from "./PasswordInput.styled";

export const PasswordInput = ({
  classNameWrapper,
  classNameInput,
  classNameButton,
  lable,
  type,
  name,
  value,
  placeholder,
  required,
  onChange,
  ruleText,
  onClick,
}) => {
  return (
    <Wrapper>
      <Lable>{lable}</Lable>
      <InputWrapper className={classNameWrapper}>
        <Input
          className={classNameInput}
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          required={required}
          onChange={onChange}
        ></Input>
        <ShowPasswordButton
          size={25}
          onClick={onClick}
          className={classNameButton}
        />
      </InputWrapper>
      <InputRuleText>{ruleText}</InputRuleText>
    </Wrapper>
  );
};
