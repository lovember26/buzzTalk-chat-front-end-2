import React from "react";
import { useState } from "react";
import makeAnimated from "react-select/animated";
import { SelectWrapper } from "./Select.styled";

const animatedComponents = makeAnimated();

const colorStyles = {
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

export default function AnimatedSelect({ users, setChoice }) {
  const [newArray, setNewArray] = useState(
    users?.map((item) => ({
      value: item.username,
      label: item.username,
    }))
  );

  console.log("newArray", newArray);

  return (
    <SelectWrapper
      closeMenuOnSelect={false}
      components={animatedComponents}
      isMulti
      options={newArray}
      onChange={(choice) => setChoice(choice[0]?.value)}
      placeholder="Write username of the friend you want to invite to this room"
      styles={colorStyles}
      // onChange={(choice) => console.log("choice", choice)}
    />
  );
}
