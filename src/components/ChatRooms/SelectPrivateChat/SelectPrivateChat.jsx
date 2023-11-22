import React from "react";
import { useState } from "react";
import makeAnimated from "react-select/animated";
import { SelectWrapper } from "./SelectPrivateChat.styled";

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
  // option: (styles) => ({
  //   ...styles,
  //   color: "white",
  // }),
  singleValue: (styles) => ({
    ...styles,
    color: "white",
  }),
  placeholder: (styles) => ({ ...styles, color: "white", fontSize: "10px" }),
};

export default function SelectPrivateChat({ users, setChoice }) {
  const [newArray, setNewArray] = useState(
    users?.map((item) => ({
      value: item.username,
      label: item.username,
    }))
  );

  return (
    <SelectWrapper
      closeMenuOnSelect={false}
      components={animatedComponents}
      // isMulti
      options={newArray}
      onChange={(choice) => setChoice(choice?.value)}
      placeholder="Write username of the friend you want to invite to this room"
      styles={colorStyles}
      // onChange={(choice) => console.log("choice", choice)}
    />
  );
}
