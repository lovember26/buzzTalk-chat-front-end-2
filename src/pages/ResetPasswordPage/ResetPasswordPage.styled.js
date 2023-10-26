import styled from "@emotion/styled";
// import { AiFillExclamationCircle } from "react-icons/ai";

// export const ResetPasswordForm = styled.form`
//   margin-top: 24px;
//   display: flex;
//   flex-direction: column;

//   button {
//     width: fit-content;
//     align-self: center;
//     padding: 12px 60px;
//     font-size: 16px;
//     border-radius: 24px;
//     background: ${({ theme }) => theme.colors.BTN_COLOR};
//     color: #fff;
//     &:hover,
//     &:focus {
//       background: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
//     }
//   }
// `;

export const Form = styled.form`
  margin-top: 24px;
  width: 343px;
  display: flex;
  flex-direction: column;

  // input {
  //   padding-left: 16px;
  //   width: 343px;
  //   height: 56px;
  //   border: none;
  //   border-radius: 15px;
  //   background: #ebebeb;
  // }
  button {
    width: fit-content;
    align-self: center;
    padding: 12px 60px;
    font-size: 16px;
    border-radius: 24px;
    background: ${({ theme }) => theme.colors.BTN_COLOR};
    color: #fff;
    &:hover,
    &:focus {
      background: ${({ theme }) => theme.colors.BTN_COLOR_HOVER};
    }
  }
`;

export const BlockInputWrapper = styled.div`
  margin-bottom: 24px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  display: flex;
  align-items: center;

  border-style: solid;
  border-width: 1px;
  border-radius: 15px;
  border-color: ${({ error, theme }) =>
    error ? theme.colors.red[200] : "transparent"};

  width: 343px;
  height: 56px;
  margin-bottom: 2px;
  color: ${({ error, theme }) =>
    error ? theme.colors.red[200] : theme.colors.white[100]};
  font-size: ${(props) => props.theme.fontSizes.m};
  font-weight: ${(props) => props.theme.fontWeights.text};

  background-color: ${({ error, theme }) =>
    error ? theme.colors.ERROR_BACKGROUND : theme.colors.BTN_COLOR_HOVER};

  padding: 6px 10px;

  &:hover {
    border-width: 2px;
  }
  &:focus {
    border-width: 2px;
  }
  @media screen and (min-width: ${({ theme }) => theme.breakpoints[1]}) {
    background: ${({ error, theme }) =>
      error ? theme.colors.ERROR_BACKGROUND : theme.colors.gray[100]};
    color: ${({ error, theme }) =>
      error ? theme.colors.red[200] : theme.colors.black[200]};
  }
`;

// export const Icon = styled(AiFillExclamationCircle)`
//   position: absolute;
//   top: 13px;
//   right: 12px;
//   cursor: pointer;

//   color: ${({ error }) => (error ? "#BD2816" : "transparent")};
// `;
