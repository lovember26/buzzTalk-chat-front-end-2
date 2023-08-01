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

// import * as React from "react";
// import { ShowPasswordButton } from "../ShowPasswordButton/ShowPasswordButton";
// import {
//   Wrapper,
//   Lable,
//   InputWrapper,
//   Input,
//   InputRuleText,
//   InputErrorText,
// } from "./PasswordInput.styled";

// export const PasswordInput = ({
//   classNameWrapper,
//   classNameInput,
//   classNameButton,
//   lable,
//   type,
//   name,
//   value,
//   placeholder,
//   required,
//   onChange,
//   ruleText,
//   onClick,
//   onBlur,
//   passwordDirty,
//   passwordError,
//   errorText,
// }) => {
//   return (
//     <Wrapper>
//       <Lable>{lable}</Lable>
//       <InputWrapper className={classNameWrapper}>
//         <Input
//           className={classNameInput}
//           type={type}
//           name={name}
//           value={value}
//           placeholder={placeholder}
//           required={required}
//           onChange={onChange}
//           onBlur={onBlur}
//         ></Input>
//         <ShowPasswordButton
//           size={25}
//           onClick={onClick}
//           className={classNameButton}
//         />
//       </InputWrapper>
//       {passwordDirty && passwordError ? (
//         <InputErrorText>{errorText}</InputErrorText>
//       ) : (
//         <InputRuleText>{ruleText}</InputRuleText>
//       )}
//     </Wrapper>
//   );
// };
