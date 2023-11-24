import styled from "@emotion/styled";

export const Button = styled.button`
  position: relative;

  display: flex;
  align-items: center;
  padding: 11px 25px;
  border-radius: 12px;
  color: ${({ color }) => color};

  font-size: 16px;
  font-weight: 600px;
  line-height: 19.5px;
  background-color: ${({ background }) => background};

  width: 343px;
  height: 62px;

  cursor: pointer;
`;

export const ArrowRightButton = styled.div`
  position: absolute;
  right: 34px;

  cursor: pointer;
`;
