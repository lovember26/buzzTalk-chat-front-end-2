import React from "react";
import makeAnimated from "react-select/animated";
import chroma from "chroma-js";
import { SelectWrapper } from "./SelectPiblicChat.styled";

const animatedComponents = makeAnimated();

const colourStyles = {
  control: (styles) => ({
    ...styles,
    backgroundColor: "#662549",
    borderRadius: "24px",
    paddingTop: "2px",
    paddingBottom: "2px",
    paddingLeft: "4px",
    paddingRight: "4px",
    width: "363px",
  }),
  // option: (styles, { data, isDisabled, isFocused, isSelected }) => {
  //   const color = chroma(data.color);
  //   return {
  //     ...styles,
  //     color: "#FFF",
  //   };
  // },
  placeholder: (styles) => ({ ...styles, color: "white", fontSize: "10px" }),
};

export default function AnimatedSelectPublicChat({ users, setChoice }) {
  return (
    <SelectWrapper
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={users}
      // onChange={(choice) => setChoice(choice[0]?.value)}
      // onChange={(choice) => console.log("choice", choice)}
      onChange={(choice) => setChoice(choice.map((item) => item.value))}
      placeholder="Write username of the friend you want to invite to this room"
      styles={colourStyles}
      // onChange={(choice) => console.log("choice", choice)}
    />
  );
}
