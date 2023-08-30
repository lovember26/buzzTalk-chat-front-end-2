import * as React from "react";
import { forwardRef } from "react";
import { Text } from "./InputNotification.styled";

export const InputNotification = forwardRef(
  ({ text, color, mb, wrong, error }, ref) => {
    return (
      <Text
        style={{ color: color, marginBottom: mb }}
        wrong={wrong}
        error={error}
      >
        {text}
      </Text>
    );
  }
);
