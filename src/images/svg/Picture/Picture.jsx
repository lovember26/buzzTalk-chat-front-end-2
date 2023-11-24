import React from "react";
import { Svg } from "./Picture.styled";

function Picture(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
    >
      <g fill={props.fill} clipPath="url(#clip0_93_1643)">
        <path d="M18.537 20.893a5 5 0 00-7.073 0l-11.4 11.4A8.319 8.319 0 008.333 40h23.333c1.633 0 3.229-.483 4.588-1.388L18.537 20.893zM30 13.334a3.333 3.333 0 100-6.667 3.333 3.333 0 000 6.667z"></path>
        <path d="M31.667 0H8.333A8.343 8.343 0 000 8.333v19.31l9.107-9.106a8.332 8.332 0 0111.786 0l17.719 17.718A8.281 8.281 0 0040 31.667V8.333A8.343 8.343 0 0031.667 0zM30 16.667a6.666 6.666 0 110-13.333 6.666 6.666 0 010 13.333z"></path>
      </g>
      <defs>
        <clipPath id="clip0_93_1643">
          <path fill="#fff" d="M0 0H40V40H0z"></path>
        </clipPath>
      </defs>
    </Svg>
  );
}

export default Picture;
