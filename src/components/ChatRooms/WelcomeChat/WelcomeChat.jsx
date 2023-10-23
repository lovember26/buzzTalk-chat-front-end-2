// export default function WelcomeChat() {
//   return <div>You can choose some friend for chat.</div>;
// }

// Check how works Redux chat
// import { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { selectAccessToken } from "redux/auth/authSelectors";
// import {
//   fetchAllMessagesThunk,
//   fetchMessageByIdThunk,
// } from "redux/chat/chatThunk";
// import { fetchAllUsersThunk } from "redux/user/userThunk";

export default function WelcomeChat() {
  // const accessToken = useSelector(selectAccessToken);
  // const [messages, setMessages] = useState([]);
  // const dispatch = useDispatch();

  // console.log("messages", messages.payload);

  // useEffect(() => {
  //   const getUsers = async () => {
  //     try {
  //       if (accessToken) {
  //         const messages = await dispatch(fetchAllMessagesThunk(accessToken));
  //         const messages = await dispatch(fetchMessageByIdThunk(1));

  //         if (messages) {
  //           setMessages(messages);
  //         }
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getUsers();
  // }, [dispatch, accessToken]);

  return <div>You can choose some friend for chat.</div>;
}
