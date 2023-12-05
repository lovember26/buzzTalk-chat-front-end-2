import * as React from "react";
import { Button } from "./ModalButtonSendForm.styled";

export const ModalButtonSendForm = ({ text, onClick, disabled }) => {
  return (
    <Button disabled={disabled} onClick={onClick}>
      {text}
    </Button>
  );
};
