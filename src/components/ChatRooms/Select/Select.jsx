import React from "react";
import makeAnimated from "react-select/animated";
import { SelectWrapper } from "./Select.styled";

const animatedComponents = makeAnimated();

export default function AnimatedSelect({ users, setChoice }) {
  return (
    <SelectWrapper
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={users}
      onChange={(choice) => setChoice(choice[0].value)}
      // onChange={(choice) => console.log("choice", choice)}
    />
  );
}
