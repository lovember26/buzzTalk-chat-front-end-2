import * as React from "react";
import {
  ShowPasswordIcon,
  Wrapper,
} from "./ShowPasswordRegisterPageButton.styled";

export const ShowPasswordRegisterPageButton = ({
  onClick,
  className,
  error,
  registerError,
}) => {
  return (
    <Wrapper error={error} registerError={registerError}>
      <ShowPasswordIcon
        size={30}
        onClick={onClick}
        className={className}
        error={error}
      />
    </Wrapper>
  );
};
