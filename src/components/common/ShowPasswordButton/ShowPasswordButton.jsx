import * as React from "react";
import { ShowPasswordIcon, Wrapper } from "./ShowPasswordButton.styled";

export const ShowPasswordButton = ({ size, onClick, className }) => {
  return (
    <Wrapper>
      <ShowPasswordIcon size={25} onClick={onClick} className={className} />
    </Wrapper>
  );
};
