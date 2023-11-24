import React from "react";
import { Svg } from "./ArrowRight.styled";

function ArrowRight(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="8"
      height="14"
      fill="none"
      viewBox="0 0 8 14"
    >
      <path
        // stroke="#451952"
        stroke={props.fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M1 13l6-6-6-6"
      ></path>
    </Svg>
  );
}

export default ArrowRight;
