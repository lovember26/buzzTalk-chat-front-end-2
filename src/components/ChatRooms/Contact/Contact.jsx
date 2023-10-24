// Class component
// import React from "react";
// import { NavLink } from "react-router-dom";

// const Contact = (props) => (
//   <NavLink to={`chats/${props.chatURL}`} style={{ color: "#fff" }}>
//     <li className="contact">
//       <div className="wrap">
//         <span className={`contact-status ${props.status}`}></span>
//         {/* <img src={props.picURL} alt="" /> */}
//         <div className="meta">
//           <p className="name">{props.name}</p>
//         </div>
//       </div>
//     </li>
//   </NavLink>
// );

// export default Contact;

// React component
import { NavLink } from "react-router-dom";
import { ReactComponent as DefaultIcon } from "../../../images/default.svg";

const Contact = ({ chat, name }) => (
  <li key={chat.id}>
    <NavLink to={`chats/${chat.id}`}>
      {chat.image ? <img src={chat.image} alt="avatar" /> : <DefaultIcon />}
      <p>
        {name}
        {chat.id}
      </p>
    </NavLink>
  </li>
);

export default Contact;

// ================================================================================
// Code who works
// import { NavLink } from "react-router-dom";
// import { ReactComponent as DefaultIcon } from "../../../images/default.svg";

// const Contact = ({ user }) => (
//   <li>
//     <NavLink to={`chats/${user.username}`}>
//       {user.image ? <img src={user.image} alt="avatar" /> : <DefaultIcon />}
//       <p>{user.username}</p>
//     </NavLink>
//   </li>
// );

// export default Contact;

// ================================================================================
// Initial code
// import { Link } from "react-router-dom";
// import { ReactComponent as DefaultIcon } from "../../../images/default.svg";

// export const FriendItem = ({ user }) => {
//   return (
//     <li>
//       <Link to={`chats/${user.username}`}>
//         {user.image ? <img src={user.image} alt="avatar" /> : <DefaultIcon />}
//         <p>{user.username}</p>
//       </Link>
//     </li>
//   );
// };
