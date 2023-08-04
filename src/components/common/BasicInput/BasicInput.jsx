import * as React from "react";
import { forwardRef } from "react";
import {
  Wrapper,
  LableText,
  Input,
  InputRuleText,
  InputErrorText,
} from "./BasicInput.styled";
import { registerPageRules, loginPageRules } from "constants";

export const BasicInput = forwardRef(
  ({ name, value, lable, type, placeholder, error, register }, ref) => {
    return (
      <Wrapper>
        <LableText htmlFor="test" error={error}>
          {lable}
        </LableText>
        <Input
          {...register(`${name}`)}
          type={type}
          placeholder={placeholder}
          error={error}
          // ref={ref}
        ></Input>
        {error ? (
          <InputErrorText>{error?.message || "*Error"}</InputErrorText>
        ) : (
          <InputRuleText>
            {name === "email" ? registerPageRules.EMAIL : loginPageRules.LOGIN}
          </InputRuleText>
        )}
      </Wrapper>
    );
  }
);
