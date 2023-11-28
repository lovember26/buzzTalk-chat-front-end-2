import * as React from "react";
import { Button } from "./ModalButtonBack.styled";

export const ModalButtonBack = ({ text, navigate, to }) => {
  return (
    <Button
      onClick={() => {
        navigate(to);
      }}
    >
      {text}
    </Button>
  );
};
