import * as React from "react";
import { forwardRef } from "react";
import { registerPageRules } from "constants";
import { ShowPasswordButton } from "../ShowPasswordButton/ShowPasswordButton";
import {
  Wrapper,
  Lable,
  InputWrapper,
  Input,
  InputRuleText,
  InputErrorText,
} from "./PasswordInput.styled";

export const PasswordInput = forwardRef(
  (
    {
      classNameWrapper,
      classNameInput,
      classNameButton,
      lable,
      type,
      name,
      error,
      register,
      placeholder,
      onClick,
    },
    ref
  ) => {
    return (
      <Wrapper>
        <Lable error={error}>{lable}</Lable>
        <InputWrapper className={classNameWrapper}>
          <Input
            {...register(`${name}`)}
            className={classNameInput}
            type={type}
            name={name}
            placeholder={placeholder}
            error={error}
            // ref={ref}
          ></Input>
          <ShowPasswordButton
            size={25}
            onClick={onClick}
            className={classNameButton}
          />
        </InputWrapper>
        {error ? (
          <InputErrorText>{error?.message || "*Error"}</InputErrorText>
        ) : (
          <InputRuleText>{registerPageRules.PASSWORD}</InputRuleText>
        )}
      </Wrapper>
    );
  }
);
