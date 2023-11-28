import React, { useState } from "react";

import { SelectWrapper } from "./SelectPublicChat.styled";

export default function SelectPublicChat({ users, setChoice }) {
  // eslint-disable-next-line
  const [newArray, setNewArray] = useState(
    users?.map((item) => ({
      value: item.username,
      label: item.username,
    }))
  );

  console.log("users select", users);

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
    placeholder: (styles) => ({ ...styles, color: "white", fontSize: "10px" }),
  };

  return (
    <SelectWrapper
      styles={colorStyles}
      distance={4}
      isMulti
      options={newArray}
      // value={selected}
      // onChange={onChange}
      onChange={(choice) => setChoice(choice.map((item) => item.value))}
      closeMenuOnSelect={false}
    />
  );
}

// Old code
// import React from "react";
// import { useState } from "react";
// import makeAnimated from "react-select/animated";
// import { SelectWrapper } from "./SelectPublicChat.styled";

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
//   placeholder: (styles) => ({ ...styles, color: "white", fontSize: "10px" }),
// };

// export default function SelectPublicChat({ users, setChoice }) {
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
//       isMulti
//       options={newArray}
//       onChange={(choice) => setChoice(choice.map((item) => item.value))}
//       placeholder="Write username of the friend you want to invite to this room"
//       styles={colorStyles}
//     />
//   );
// }
