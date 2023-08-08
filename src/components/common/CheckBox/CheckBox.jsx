import * as React from "react";
import { forwardRef } from "react";

import {
  Wrapper,
  CheckboxWrapper,
  CheckboxWrapperInput,
  CheckboxWrapperLable,
  InputErrorText,
} from "./CheckBox.styled";

export const Checkbox = forwardRef(({ text, register, name, error }, ref) => {
  return (
    <Wrapper>
      <CheckboxWrapper>
        <CheckboxWrapperLable>{text}</CheckboxWrapperLable>
        <CheckboxWrapperInput {...register(`${name}`)} type="checkbox" />
      </CheckboxWrapper>
      <InputErrorText>{error?.message}</InputErrorText>
    </Wrapper>
  );
});
