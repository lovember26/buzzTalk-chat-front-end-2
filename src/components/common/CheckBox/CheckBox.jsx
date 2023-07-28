import * as React from "react";
import {
  CheckboxWrapper,
  CheckboxWrapperInput,
  CheckboxWrapperLable,
} from "./CheckBox.styled";

export const Checkbox = ({ text, onChange }) => {
  return (
    <CheckboxWrapper>
      <CheckboxWrapperLable>{text}</CheckboxWrapperLable>
      <CheckboxWrapperInput type="checkbox" onChange={onChange} />
    </CheckboxWrapper>
  );
};
