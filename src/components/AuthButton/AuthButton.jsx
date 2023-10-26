import { StyledAuthButton } from "./AuthButton.styled";

export const AuthButton = ({ page, text, btnWidth }) => {
  return (
    <StyledAuthButton to={page} style={{ width: btnWidth }}>
      {text}
    </StyledAuthButton>
  );
};
