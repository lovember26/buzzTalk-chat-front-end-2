import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import {
  FormWrapper,
  Form,
  Input,
  ButtonsWrapper,
  ButtonBack,
  Button,
  Text,
} from "./CreateChatForm.styled";
import { selectAccessToken } from "redux/auth/authSelectors";
import { selectUserName } from "redux/user/userSelectors";
import AnimatedSelect from "../Select/Select";

const CreateChatForm = () => {
  const accessToken = useSelector(selectAccessToken);
  const username = useSelector(selectUserName);
  const [userChoice, setUserChoice] = useState(null);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    if (accessToken !== null && username !== null) {
      getUserChats(accessToken);
    }
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
    console.log("CreateChatForm submit");

    if (userChoice) {
      console.log("sended data", userChoice);
      const { data } = await axios.post(
        "https://buzz-talk-api.onrender.com/api/chat/private-chat/",
        {
          receiver: userChoice,
        }
      );
      console.log("data create private chat", data);
    }
  };

  return (
    <FormWrapper>
      <Text>Invite friends to Chat room name</Text>
      <Form onSubmit={handlerSubmit}>
        <AnimatedSelect users={users} setChoice={setUserChoice} />
        {/* <Input type="text" placeholder="Enter name of created chat"></Input> */}
        <ButtonsWrapper>
          <ButtonBack>Back</ButtonBack>
          <Button>Create chat</Button>
        </ButtonsWrapper>
      </Form>
    </FormWrapper>
  );
};

export default CreateChatForm;

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
