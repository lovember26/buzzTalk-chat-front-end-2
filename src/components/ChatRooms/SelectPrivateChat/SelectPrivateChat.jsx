import React, { useState } from "react";
import { SelectWrapper } from "./SelectPrivateChat.styled";

export default function SelectPrivateChat({ users, setChoice }) {
  // eslint-disable-next-line
  const [newArray, setNewArray] = useState(
    users?.map((item) => ({
      value: item.username,
      label: item.username,
    }))
  );

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
    singleValue: (styles) => ({
      ...styles,
      color: "white",
    }),
    placeholder: (styles) => ({ ...styles, color: "white", fontSize: "10px" }),
  };

  return (
    <>
      <label id="aria-label" htmlFor="aria-example-input"></label>
      <SelectWrapper
        aria-labelledby="aria-label"
        inputId="aria-example-input"
        name="aria-live-color"
        options={newArray}
        onChange={(choice) => setChoice(choice?.value)}
        placeholder="Write username of the friend you want to invite to this room"
        styles={colorStyles}
      />
    </>
  );
}

// Old code
// import React from "react";
// import { useState } from "react";
// import makeAnimated from "react-select/animated";
// import { SelectWrapper } from "./SelectPrivateChat.styled";

// const animatedComponents = makeAnimated();

// const colorStyles = {
//   control: (styles) => ({
//     ...styles,
//     backgroundColor: "#662549",
//     borderRadius: "24px",
//     paddingTop: "2px",
//     paddingBottom: "2px",
//     paddingLeft: "4px",
//     paddingRight: "4px",
//     width: "363px",
//   }),
//   singleValue: (styles) => ({
//     ...styles,
//     color: "white",
//   }),
//   placeholder: (styles) => ({ ...styles, color: "white", fontSize: "10px" }),
// };

// export default function SelectPrivateChat({ users, setChoice }) {
// const [newArray, setNewArray] = useState(
//   users?.map((item) => ({
//     value: item.username,
//     label: item.username,
//   }))
// );

//   return (
//     <SelectWrapper
//       closeMenuOnSelect={false}
//       components={animatedComponents}
//       options={newArray}
//       onChange={(choice) => setChoice(choice?.value)}
//       placeholder="Write username of the friend you want to invite to this room"
//       styles={colorStyles}
//     />
//   );
// }
