import * as React from "react";
import { Button } from "./ModalButtonSendForm.styled";

export const ModalButtonSendForm = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};
