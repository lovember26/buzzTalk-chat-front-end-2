import * as React from "react";
import { forwardRef } from "react";
import {
  Wrapper,
  LableText,
  Input,
  InputRuleText,
  InputErrorText,
} from "./BasicInput.styled";
import { registerPageRules } from "constants";

export const BasicInput = forwardRef(
  ({ name, lable, type, placeholder, error, register }, ref) => {
    // console.log("ref", ref);

    return (
      <Wrapper>
        <LableText htmlFor="test">{lable}</LableText>
        <Input
          {...register(`${name}`)}
          type={type}
          placeholder={placeholder}
          // ref={ref}
        ></Input>
        {error ? (
          <InputErrorText>{error?.message || "*Error"}</InputErrorText>
        ) : (
          <InputRuleText>{registerPageRules.EMAIL}</InputRuleText>
        )}
      </Wrapper>
    );
  }
);

// export const BasicInput = ({
//   lable,
//   type,
//   name,
//   value,
//   placeholder,
//   required,
//   onChange,
//   ruleText,
//   emailDirty,
//   errors,
//   errorText,
//   ...otherProps
// }) => {
//   return (
//     <Wrapper>
//       <LableText>{lable}</LableText>
//       <Input
//         {...otherProps}
//         type={type}
//         // name={name}
//         // value={value}
//         placeholder={placeholder}
//         // required={required}
//         // onChange={onChange}
//       ></Input>
//       {errors?.email ? (
//         <InputErrorText>{errors?.email?.message || "*Error"}</InputErrorText>
//       ) : (
//         <InputRuleText>{registerPageRules.EMAIL}</InputRuleText>
//       )}
//     </Wrapper>
//   );
// };

// import * as React from "react";
// import { Wrapper, LableText, Input, InputRuleText } from "./BasicInput.styled";

// export const BasicInput = ({
//   lable,
//   type,
//   name,
//   value,
//   placeholder,
//   required,
//   onChange,
//   ruleText,
// }) => {
//   return (
//     <Wrapper>
//       <LableText>{lable}</LableText>
//       <Input
//         type={type}
//         name={name}
//         value={value}
//         placeholder={placeholder}
//         required={required}
//         onChange={onChange}
//       ></Input>
//       <InputRuleText>{ruleText}</InputRuleText>
//     </Wrapper>
//   );
// };

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
// {emailDirty && emailError ? (
//   <InputErrorText>{errorText}</InputErrorText>
// ) : (
//   <InputRuleText>{ruleText}</InputRuleText>
// )}
//     </Wrapper>
//   );
// };
