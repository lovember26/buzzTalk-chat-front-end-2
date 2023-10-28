// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { selectAccessToken } from "redux/auth/authSelectors";
import NoFriends from "../SideBar/NoFriends/NoFriends";
import { PublicChatItem } from "./PublicChatsList.styled";

const data = [
  // {
  //   id: 1,
  //   slug: "slug1",
  //   receiver: {
  //     username: "Ivan",
  //     image: "image",
  //   },
  // },
  // {
  //   id: 2,
  //   slug: "slug2",
  //   receiver: {
  //     username: "Tanya",
  //     image: "image",
  //   },
  // },
  // {
  //   id: 3,
  //   slug: "slug3",
  //   receiver: {
  //     username: "Olga",
  //     image: "image",
  //   },
  // },
  // {
  //   id: 4,
  //   slug: "slug4",
  //   receiver: {
  //     username: "Roma",
  //     image: "image",
  //   },
  // },
  // {
  //   id: 5,
  //   slug: "slug5",
  //   receiver: {
  //     username: "Kola",
  //     image: "image",
  //   },
  // },
];

export const PublicChatsList = () => {
  // const accessToken = useSelector(selectAccessToken);
  // const username = useSelector(selectUserName);
  // const [activeChats, setActiveChats] = useState([]);

  // console.log("activeChats", activeChats);

  // useEffect(() => {
  //   if (accessToken !== null && username !== null) {
  //     getUserChats(accessToken, username);
  //   }
  // }, [accessToken, username]);

  // const getUserChats = async (token, username) => {
  //   const { data } = await axios.get(
  //     `https://buzz-talk-api.onrender.com/api/chat/?username=${username}`,
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     }
  //   );
  //   setActiveChats(data);
  // };

  return (
    <>
      {data && data.length > 0 ? (
        <ul>
          {data?.map((chat) => (
            <PublicChatItem to={`chats/${chat?.id}`} key={chat?.id}>
              {/* <p>{chat.receiver.username}</p> */}
              <p>{chat?.id}</p>
            </PublicChatItem>
          ))}
        </ul>
      ) : (
        <NoFriends />
      )}
    </>
  );
};
