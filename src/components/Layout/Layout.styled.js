import styled from "@emotion/styled";
import { TITLE_COLOR } from "constants";
import { MAIN_COLOR } from "constants";

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${MAIN_COLOR};
  border-bottom: 1px solid gray;
  height: 220px;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-right: auto;
  margin-left: auto;
`;

export const LogoTitle = styled.p`
  text-align: center;
  color: ${TITLE_COLOR};
  font-size: 50px;

  font-weight: 600;
`;
