import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
const ellipseAnimation = keyframes`
  0% {
    fill: #F39F5A;
  }
  100% {
    fill: #451952;
  }
`;

const restAnimation = keyframes`
  0% {
    stroke: #F39F5A;
    fill: #F39F5A;
  }
  100% {
    stroke: #451952;
    fill: #451952;
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  ellipse {
    animation: ${ellipseAnimation} 1s ease-in-out infinite alternate;
  }
  .second {
    animation: ${restAnimation} 1s ease-in-out infinite alternate;
  }
  .third {
    animation: ${restAnimation} 1s ease-in-out infinite alternate;
  }
  .fourth {
    animation: ${restAnimation} 1s ease-in-out infinite alternate;
  }
`;
