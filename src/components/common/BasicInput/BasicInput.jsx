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

// import * as React from "react";
// import {
//   Wrapper,
//   LableText,
//   Input,
//   InputRuleText,
//   InputErrorText,
// } from "./BasicInput.styled";

// export const BasicInput = ({
//   lable,
//   type,
//   name,
//   value,
//   placeholder,
//   required,
//   onChange,
//   ruleText,
//   errorText,
//   classNameInput,
//   classNameInputNotification,
//   onBlur,
//   emailDirty,
//   emailError,
// }) => {
//   return (
//     <Wrapper>
//       <LableText>{lable}</LableText>
//       <Input
//         className={classNameInput}
//         type={type}
//         name={name}
//         value={value}
//         placeholder={placeholder}
//         required={required}
//         onChange={onChange}
//         onBlur={onBlur}
//       ></Input>
//       {emailDirty && emailError ? (
//         <InputErrorText>{errorText}</InputErrorText>
//       ) : (
//         <InputRuleText>{ruleText}</InputRuleText>
//       )}
//     </Wrapper>
//   );
// };
