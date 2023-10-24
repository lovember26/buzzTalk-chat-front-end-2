export default function WelcomeChat() {
  return <div>You can choose some chat to start messaging.</div>;
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
//   const [data, setData] = useState([]);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const getUsers = async () => {
//       try {
//         if (accessToken) {
//           const response = await dispatch(fetchAllMessagesThunk(accessToken));
//           const response = await dispatch(fetchMessageByIdThunk(1));
//           console.log("response WelcomeChat", response);

//           if (response) {
//             setData(response);
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
