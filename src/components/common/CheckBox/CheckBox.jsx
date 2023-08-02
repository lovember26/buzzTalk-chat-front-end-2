import * as React from "react";
import {
  CheckboxWrapper,
  CheckboxWrapperInput,
  CheckboxWrapperLable,
} from "./CheckBox.styled";

export const Checkbox = ({ text, register }) => {
  return (
    <CheckboxWrapper>
      <CheckboxWrapperLable>{text}</CheckboxWrapperLable>
      <CheckboxWrapperInput {...register("checkbox")} type="checkbox" />
    </CheckboxWrapper>
  );
};
