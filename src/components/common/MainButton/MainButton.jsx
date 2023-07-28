import * as React from "react";
// import { ButtonPropTypes } from "./Button.props";
import { Button } from "./MainButton.styled";

export const MainButton = ({ type, text, disabledHandler }) => {
  return (
    <Button type={type} disabled={disabledHandler}>
      {text}
    </Button>
  );
};

// MainButton.propTypes = ButtonPropTypes;
