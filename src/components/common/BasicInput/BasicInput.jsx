import * as React from "react";
import { forwardRef } from "react";
import { InputNotification } from "../InputNotification/InputNotification";
import {
  Wrapper,
  InputWrapper,
  LableText,
  Input,
  Icon,
} from "./BasicInput.styled";
import { registerPageRules, loginPageRules } from "constants";

export const BasicInput = forwardRef(
  ({ name, lable, type, placeholder, error, register }, ref) => {
    return (
      <Wrapper>
        <LableText htmlFor="test" error={error}>
          {lable}
        </LableText>
        <InputWrapper>
          <Input
            {...register(`${name}`)}
            type={type}
            placeholder={placeholder}
            error={error}
          ></Input>
          <Icon size={22} error={error} />
        </InputWrapper>
        {error ? (
          <InputNotification text={error} color={"red"} />
        ) : (
          <InputNotification
            text={
              name === "email" ? registerPageRules.EMAIL : loginPageRules.LOGIN
            }
            color={"gray"}
          />
        )}
      </Wrapper>
    );
  }
);
