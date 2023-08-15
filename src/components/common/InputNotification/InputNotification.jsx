import * as React from "react";
import { forwardRef } from "react";
import { Text } from "./InputNotification.styled";

export const InputNotification = forwardRef(({ text, color, mb }, ref) => {
  return <Text style={{ color: color, marginBottom: mb }}>{text}</Text>;
});
