import * as React from "react";
import { forwardRef } from "react";
import { registerPageRules } from "constants";
import { ShowPasswordButton } from "../ShowPasswordButton/ShowPasswordButton";
import { InputNotification } from "../InputNotification/InputNotification";
import { Wrapper, Lable, InputWrapper, Input } from "./PasswordInput.styled";

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
          ></Input>
          <ShowPasswordButton
            size={25}
            onClick={onClick}
            className={classNameButton}
          />
        </InputWrapper>
        {error ? (
          <InputNotification text={error} color={"red"} />
        ) : (
          <InputNotification
            text={
              name === "password"
                ? registerPageRules.PASSWORD
                : registerPageRules.CONFIRM_PASSWORD
            }
            color={"gray"}
          />
        )}
      </Wrapper>
    );
  }
);
