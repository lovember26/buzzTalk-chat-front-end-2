import * as React from "react";
import { Wrapper, LableText, Input, InputRuleText } from "./BasicInput.styled";

export const BasicInput = ({
  lable,
  type,
  name,
  value,
  placeholder,
  required,
  onChange,
  ruleText,
}) => {
  return (
    <Wrapper>
      <LableText>{lable}</LableText>
      <Input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
      ></Input>
      <InputRuleText>{ruleText}</InputRuleText>
    </Wrapper>
  );
};
