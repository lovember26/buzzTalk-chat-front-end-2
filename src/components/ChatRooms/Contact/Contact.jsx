import { NavLink } from "react-router-dom";
import { ReactComponent as DefaultIcon } from "../../../images/default.svg";

const Contact = ({ user }) => (
  <li>
    <NavLink to={`chats/${user.username}`}>
      {user.image ? <img src={user.image} alt="avatar" /> : <DefaultIcon />}
      <p>{user.username}</p>
    </NavLink>
  </li>
);

export default Contact;

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
