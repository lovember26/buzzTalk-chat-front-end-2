import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  FormWrapper,
  Form,
  Input,
  ButtonsWrapper,
  ButtonWrapper,
  ButtonBack,
  Lable,
  Button,
  InputWrapper,
  Text,
  ButtonForPublic,
  ButtonForPrivate,
} from "./CreateChatForm.styled";
import { selectAccessToken } from "redux/auth/authSelectors";
import { selectUserName } from "redux/user/userSelectors";
import AnimatedSelect from "../Select/Select";
import AnimatedSelectPublicChat from "../SelectPublicChat/SelectPublicChat";

const CreateChatForm = () => {
  const accessToken = useSelector(selectAccessToken);
  const username = useSelector(selectUserName);
  const [userPrivateChatChoice, setUserPrivateChatChoice] = useState(null);
  const [userPublicChatChoice, setUserPublicChatChoice] = useState(null);

  console.log("userPublicChatChoice", userPublicChatChoice);

  const [users, setUsers] = useState([]);

  const [kindChatChoice, setKindChatChoice] = useState(null);
  const [publicChatName, setPublicChatName] = useState("");

  console.log("publicChatName", publicChatName);

  useEffect(() => {
    if (accessToken !== null && username !== null) {
      getUserChats(accessToken);
    } /* eslint-disable */
  }, [accessToken, username]);

  const getUserChats = async (token) => {
    const { data } = await axios.get(
      "https://buzz-talk-api.onrender.com/api/accounts/users",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    optionedUsers(data);
  };

  const optionedUsers = (data) => {
    data.map((item) => {
      const optionedUser = { value: item.username, label: item.username };
      return setUsers((prevState) => [...prevState, optionedUser]);
    });
  };

  const handlerSubmit = async (event) => {
    event.preventDefault();
    console.log("handlerSubmit");

    if (kindChatChoice === "private" && userPrivateChatChoice) {
      const { data } = await axios.post(
        "https://buzz-talk-api.onrender.com/api/chat/private-chat/",
        {
          receiver: userPrivateChatChoice,
        }
      );
      console.log("data create private chat", data);
    }

    if (kindChatChoice === "public" && userPublicChatChoice) {
      const newPublicChat = {
        title: publicChatName,
        participants: userPublicChatChoice,
      };

      const { data } = await axios.post(
        "https://buzz-talk-api.onrender.com/api/chat/public-chat/",
        newPublicChat
      );
      console.log("data create public chat", data);
    }
  };

  return (
    <>
      {!kindChatChoice && (
        <FormWrapper>
          <Text>What kind of chat you’d like to create?</Text>
          <ButtonWrapper>
            <ButtonForPublic
              onClick={() => {
                setKindChatChoice("public");
              }}
            >
              For public discussion
            </ButtonForPublic>
            <ButtonForPrivate
              onClick={() => {
                setKindChatChoice("private");
              }}
            >
              For private discussion
            </ButtonForPrivate>
          </ButtonWrapper>
        </FormWrapper>
      )}

      {kindChatChoice === "public" && (
        <FormWrapper>
          <Text>Choose friends for public communication</Text>
          <Form onSubmit={handlerSubmit}>
            <InputWrapper>
              <Lable>CHAT ROOM NAME</Lable>
              <Input
                type="text"
                placeholder="Enter name of created chat"
                value={publicChatName}
                onChange={(event) => setPublicChatName(event.target.value)}
              ></Input>
            </InputWrapper>
            <AnimatedSelectPublicChat
              users={users}
              setChoice={setUserPublicChatChoice}
            />
            <ButtonsWrapper>
              <ButtonBack
                onClick={() => {
                  setKindChatChoice(null);
                }}
              >
                Back
              </ButtonBack>
              <Button>Create chat</Button>
            </ButtonsWrapper>
          </Form>
        </FormWrapper>
      )}

      {kindChatChoice === "private" && (
        <FormWrapper>
          <Text>Choose a friend for private communication</Text>
          <Form onSubmit={handlerSubmit}>
            <AnimatedSelect
              users={users}
              setChoice={setUserPrivateChatChoice}
            />
            {/* <Input type="text" placeholder="Enter name of created chat"></Input> */}
            <ButtonsWrapper>
              <ButtonBack
                onClick={() => {
                  setKindChatChoice(null);
                }}
              >
                Back
              </ButtonBack>
              <Button>Create chat</Button>
            </ButtonsWrapper>
          </Form>
        </FormWrapper>
      )}
    </>
  );
};

export default CreateChatForm;

// <FormWrapper>
//   <Text>Invite friends to Chat room name</Text>
//   <Form onSubmit={handlerSubmit}>
//     <AnimatedSelect users={users} setChoice={setUserChoice} />
//     {/* <Input type="text" placeholder="Enter name of created chat"></Input> */}
//     <ButtonsWrapper>
//       <ButtonBack>Back</ButtonBack>
//       <Button>Create chat</Button>
//     </ButtonsWrapper>
//   </Form>
// </FormWrapper>

// import React from "react";
// import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";
// import { Form, Input, Button } from "./CreateChatForm.styled";
// import { selectAccessToken } from "redux/auth/authSelectors";
// import { selectUserName } from "redux/user/userSelectors";
// import AnimatedSelect from "../Select/Select";

// const CreateChatForm = () => {
//   const accessToken = useSelector(selectAccessToken);
//   const username = useSelector(selectUserName);
//   const [userChoice, setUserChoice] = useState(null);

//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     if (accessToken !== null && username !== null) {
//       getUserChats(accessToken);
//     }
//   }, [accessToken, username]);

//   const getUserChats = async (token) => {
//     // const { data } = await axios.get(
//     //   "https://buzz-talk-api.onrender.com/api/accounts/users",
//     //   {
//     //     headers: {
//     //       Authorization: `Bearer ${token}`,
//     //     },
//     //   }
//     // );
//     // optionedUsers(data);
//   };

//   const optionedUsers = (data) => {
//     data.map((item) => {
//       const optionedUser = { value: item.username, label: item.username };
//       return setUsers((prevState) => [...prevState, optionedUser]);
//     });
//   };

//   const handlerSubmit = async (event) => {
//     event.preventDefault();

//     // if (userChoice) {
//     //   const { data } = await axios.post(
//     //     "https://buzz-talk-api.onrender.com/private-chat/",
//     //     {
//     //       receiver: userChoice,
//     //     }
//     //   );
//     //   console.log("data create private chat", data);
//     // }
//   };

//   return (
//     <Form onSubmit={handlerSubmit}>
//       <AnimatedSelect users={users} setChoice={setUserChoice} />
//       {/* <Input type="text" placeholder="Enter name of created chat"></Input> */}
//       <Button>Create private chat</Button>
//     </Form>
//   );
// };

// export default CreateChatForm;
