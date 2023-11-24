import * as React from "react";
import { Button } from "./ButtonCreate.styled";
import Picture from "images/svg/Picture/Picture";
import ArrowRight from "images/svg/ArrowRight/ArrowRight";

export const ButtonCreate = ({ onClick, color, background, fill, text }) => {
  return (
    <Button onClick={onClick} color={color} background={background}>
      <Picture fill={fill} />
      {text}
      <ArrowRight fill={fill} />
    </Button>
  );
};
