import * as React from "react";
import { ShowPasswordIcon, Wrapper } from "./ShowPasswordButton.styled";

export const ShowPasswordButton = ({
  onClick,
  className,
  error,
  registerError,
  wrong,
}) => {
  return (
    <Wrapper error={error} registerError={registerError} wrong={wrong}>
      <ShowPasswordIcon
        size={30}
        onClick={onClick}
        className={className}
        error={error}
        wrong={wrong}
      />
    </Wrapper>
  );
};
