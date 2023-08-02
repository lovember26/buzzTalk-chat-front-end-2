import * as React from "react";
// import { ButtonPropTypes } from "./Button.props";
import { Button } from "./MainButton.styled";

export const MainButton = ({ type, text, disabled }) => {
  return (
    <Button type={type} disabled={disabled}>
      {text}
    </Button>
  );
};

// MainButton.propTypes = ButtonPropTypes;
