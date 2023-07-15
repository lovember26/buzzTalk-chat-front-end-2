import * as React from "react";
import { TitlePropTypes } from "./Title.props";
import { TitleText } from "./Title.styled";

export default function Title({ title }) {
  return <TitleText>{title}</TitleText>;
}

Title.propTypes = TitlePropTypes;
