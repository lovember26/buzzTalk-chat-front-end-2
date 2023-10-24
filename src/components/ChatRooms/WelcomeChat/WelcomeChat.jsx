export default function WelcomeChat() {
  return <div>You can choose some friend for chat.</div>;
}

// Just to check how redux requests work
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectAccessToken } from "redux/auth/authSelectors";
// import {
//   fetchAllMessagesThunk,
//   fetchMessageByIdThunk,
// } from "redux/chat/chatThunk";
// import { fetchAllUsersThunk } from "redux/user/userThunk";

// export default function WelcomeChat() {
//   const accessToken = useSelector(selectAccessToken);
//   const [messages, setMessages] = useState([]);
//   const [messagesById, setMessagesById] = useState([]);
//   const dispatch = useDispatch();

//   // console.log("messages", messages.payload);
//   // console.log("messages by Id", messagesById.payload);

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         if (accessToken) {
//           const messages = await dispatch(fetchAllMessagesThunk(accessToken));
//           const messagesById = await dispatch(fetchMessageByIdThunk(1));
//           // console.log("messagesById", messagesById);

//           if (messages) {
//             setMessages(messages);
//           }
//           if (messagesById) {
//             setMessagesById(messagesById);
//           }
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getUsers();
//   }, [dispatch, accessToken]);

//   return <div>You can choose some friend for chat.</div>;
// }
