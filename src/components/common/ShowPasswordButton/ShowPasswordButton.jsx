import * as React from "react";
import { ShowPasswordIcon, Wrapper } from "./ShowPasswordButton.styled";

export const ShowPasswordButton = ({ size, onClick, className, error }) => {
  return (
    <Wrapper error={error}>
      <ShowPasswordIcon
        size={30}
        onClick={onClick}
        className={className}
        error={error}
      />
    </Wrapper>
  );
};
