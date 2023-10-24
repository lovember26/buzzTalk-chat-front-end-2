// import { Comment } from "react-loader-spinner";

// export const Loader = () => {
//   return (
//     <Comment
//       visible={true}
//       height="80"
//       width="80"
//       ariaLabel="comment-loading"
//       wrapperStyle={{
//         position: "absolute",
//         top: "50%",
//         left: "50%",
//         margin: "-40px 0 0 -40px",
//       }}
//       wrapperClass="comment-wrapper"
//       color="#fff"
//       backgroundColor="#F4442E"
//     />
//   );
// };

import styled, { keyframes } from "styled-components";

import { LoaderContainer } from "./Loader.styled";
// const scaleAnimation = keyframes`
//   0% {
//     fill:#F39F5A;
//     stroke:#F39F5A;

//   }
//   100% {
//   fill:purple;
//   stroke:purple;

//   }
// `;

// const SVG = styled.svg`
//   ellipse {
//     animation: ${scaleAnimation} 1s ease infinite alternate;
//   }
//   .second {
//     animation: ${scaleAnimation} 1s ease infinite alternate;
//   }
//   .third {
//     animation: ${scaleAnimation} 1s ease infinite alternate;
//   }
//   .fourth {
//     animation: ${scaleAnimation} 1s ease infinite alternate;
//   }
// `;

export const Loader = () => {
  return (
    <LoaderContainer>
      <svg
        width="72"
        height="65"
        viewBox="0 0 72 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="third"
          d="M65.5299 22.4505C65.5289 16.5887 61.0865 21.0502 47.0562 22.9475C61.0848 24.2367 65.5472 27.422 65.5299 22.4505Z"
          fill="#F39F5A"
          stroke="#F39F5A"
        />
        <path
          className="third"
          d="M6.29888 21.7404C5.75513 27.5769 10.5929 23.5476 24.7388 22.9624C10.8907 20.375 6.74368 16.7887 6.29888 21.7404Z"
          fill="#F39F5A"
          stroke="#F39F5A"
        />
        <path className="third" d="M24.7627 22.9619H47.0666" stroke="#F39F5A" />
        <path
          className="second"
          d="M55.7562 12.2532C55.7555 6.39143 52.8059 10.8529 43.4903 12.7502C52.8048 14.0394 55.7677 17.2248 55.7562 12.2532Z"
          fill="#F39F5A"
          stroke="#F39F5A"
        />
        <path
          className="second"
          d="M16.4292 11.5431C16.0682 17.3796 19.2803 13.3503 28.6726 12.7652C19.478 10.1777 16.7245 6.59147 16.4292 11.5431Z"
          fill="#F39F5A"
          stroke="#F39F5A"
        />
        <path
          className="second"
          d="M28.6885 12.7646H43.4974"
          stroke="#F39F5A"
        />
        <path
          className="second"
          d="M55.7562 53.0384C55.7555 47.1766 52.8059 51.6381 43.4903 53.5354C52.8048 54.8246 55.7677 58.0099 55.7562 53.0384Z"
          fill="#F39F5A"
          stroke="#F39F5A"
        />
        <path
          className="second"
          d="M16.4292 52.3283C16.0682 58.1648 19.2803 54.1355 28.6726 53.5503C19.478 50.9629 16.7245 47.3766 16.4292 52.3283Z"
          fill="#F39F5A"
          stroke="#F39F5A"
        />
        <path
          className="second"
          d="M28.6885 53.5498H43.4974"
          stroke="#F39F5A"
        />
        <path
          className="fourth"
          d="M71.0108 32.6468C71.0096 26.785 65.7764 31.2465 49.2487 33.1438C65.7745 34.433 71.0312 37.6183 71.0108 32.6468Z"
          fill="#F39F5A"
          stroke="#F39F5A"
        />
        <path
          className="fourth"
          d="M1.23641 31.9367C0.595872 37.7732 6.29483 33.7439 22.9587 33.1587C6.64564 30.5713 1.76039 26.985 1.23641 31.9367Z"
          fill="#F39F5A"
          stroke="#F39F5A"
        />
        <path
          className="fourth"
          d="M22.9873 33.1582H49.2614"
          stroke="#F39F5A"
        />
        <path
          className="third"
          d="M65.5299 42.8421C65.5289 36.9803 61.0865 41.4418 47.0562 43.3391C61.0848 44.6283 65.5472 47.8136 65.5299 42.8421Z"
          fill="#F39F5A"
          stroke="#F39F5A"
        />
        <path
          className="third"
          d="M6.29888 42.132C5.75513 47.9685 10.5929 43.9392 24.7388 43.354C10.8907 40.7666 6.74368 37.1803 6.29888 42.132Z"
          fill="#F39F5A"
          stroke="#F39F5A"
        />
        <path className="third" d="M24.7627 43.3535H47.0666" stroke="#F39F5A" />
        <ellipse
          cx="36.0496"
          cy="2.54902"
          rx="3.18627"
          ry="2.54902"
          fill="#F39F5A"
        />
        <ellipse
          cx="36.0496"
          cy="62.4514"
          rx="3.18627"
          ry="2.54902"
          fill="#F39F5A"
        />
      </svg>
    </LoaderContainer>
  );
};
