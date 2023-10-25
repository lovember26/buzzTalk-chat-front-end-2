import React from "react";
import makeAnimated from "react-select/animated";
import { SelectWrapper } from "./Select.styled";

const animatedComponents = makeAnimated();

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "banana", label: "Banana" },
  { value: "cola", label: "Cola" },
  { value: "onion", label: "Onion" },
  { value: "garlic", label: "Garlic" },
];

export default function AnimatedSelect() {
  return (
    <SelectWrapper
      closeMenuOnSelect={false}
      components={animatedComponents}
      defaultValue={[options[4], options[5]]}
      isMulti
      options={options}
    />
  );
}
