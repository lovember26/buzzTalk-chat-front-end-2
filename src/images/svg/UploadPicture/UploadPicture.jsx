import React from "react";
import { Svg } from "./UploadPicture.styled";

function UploadPicture() {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="62"
      height="62"
      fill="none"
      viewBox="0 0 62 62"
    >
      <g fill="#D9D9D9" clipPath="url(#clip0_96_1895)">
        <path d="M28.732 32.385a7.75 7.75 0 00-10.963 0L.099 50.055A12.894 12.894 0 0012.917 62h36.167c2.53 0 5.005-.749 7.112-2.152L28.732 32.385zM46.5 20.667a5.167 5.167 0 100-10.333 5.167 5.167 0 000 10.333z"></path>
        <path d="M49.083 0H12.917A12.932 12.932 0 000 12.917v29.93l14.115-14.115a12.917 12.917 0 0118.27 0l27.463 27.463A12.836 12.836 0 0062 49.083V12.917A12.932 12.932 0 0049.083 0zM46.5 25.833a10.333 10.333 0 110-20.666 10.333 10.333 0 010 20.666z"></path>
      </g>
      <rect
        width="60"
        height="60"
        x="1"
        y="1"
        stroke="#fff"
        strokeWidth="2"
        rx="29"
      ></rect>
      <defs>
        <clipPath id="clip0_96_1895">
          <rect width="62" height="62" fill="#fff" rx="30"></rect>
        </clipPath>
      </defs>
    </Svg>
  );
}

export default UploadPicture;
