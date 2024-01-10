import { useEffect } from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import { selectFetchAllPrivateChats } from "redux/chat/chatSelectors";
import { selectFetchAllPublicChats } from "redux/chat/chatSelectors";

import { selectAllUsers } from "redux/user/userSelectors";
import { fetchAllUsersThunk } from "redux/user/userThunk";

import Modal from "components/common/Modal/Modal";
import ChatModal from "components/ChatRooms/Modal/ChatModal/ChatModal";

import { PublicChatsList } from "components/ChatRooms/PublicChatsList/PublicChatsList";
import { PrivateChatList } from "components/ChatRooms/PrivateChatsList/PrivateChatsList";

import UserProfile from "../UserProfile/UserProfile";

import { ReactComponent as AddChatButton } from "../../../../images/addChatBtn.svg";
import { ReactComponent as ChatsBtn } from "../../../../images/chatsBtn.svg";
import { ReactComponent as SearchIcon } from "../../../../images/search.svg";

import { useChat } from "contexts/ChatContext";

import {
  SearchBar,
  StyledChatsBtn,
  StyledNav,
  StyledSideBar,
  SearchInput,
  FriendsLink,
  ContactIcon,
  AddChatButtonWrapper,
  Title,
  Form,
  FriendsLinkWrapper,
} from "./SidePanel.styled";

// import { ChatProvider } from "contexts/ChatContext";

export default function SidePanel() {
  const [modalActive, setModalActive] = useState(false);
  const [value, setValue] = useState("");
  const { results } = useSelector(selectAllUsers);

  const privateChats = useSelector(selectFetchAllPrivateChats);
  const publicChats = useSelector(selectFetchAllPublicChats);

  const {
    isPrivateChat,
    setChatSlug,
    setIsPrivateChat,
    setPrivateChatName,
    setPrivateChatImage,
    setPublicChatName,
    setPublicChatImage,
  } = useChat();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsersThunk());
  }, [dispatch]);

  const handleSearchValue = ({ target }) => {
    setValue(target.value);
  };

  const handleChatNavigate = () => {
    if (privateChats?.length) {
      return `chats/${privateChats[0].slug}`;
    }

    if (publicChats?.length) {
      return `chats/${publicChats[0].slug}`;
    }

    if (!publicChats?.length && !publicChats?.length) {
      return `chats`;
    }
  };

  const onClickChatHandler = () => {
    if (privateChats?.length) {
      const slug = privateChats[0].slug;
      const isPrivateChat = privateChats[0].is_private;
      const receiver = privateChats[0].receiver.username;
      const image = privateChats[0].receiver.image;

      setChatSlug(slug);
      setIsPrivateChat(isPrivateChat);
      setPrivateChatName(receiver);
      setPrivateChatImage(image);
      return;
    }

    if (publicChats?.length) {
      const slug = publicChats[0].slug;
      const isPrivateChat = publicChats[0].is_private;
      const title = publicChats[0].title;
      const image = publicChats[0].receiver.image;

      setChatSlug(slug);
      setIsPrivateChat(isPrivateChat);
      setPublicChatName(title);
      setPublicChatImage(image);
    }
  };

  return (
    <>
      <StyledSideBar>
        <StyledNav>
          {/* <StyledChatsBtn type="button" to={"chats"}> */}
          <StyledChatsBtn
            type="button"
            onClick={() => onClickChatHandler()}
            to={handleChatNavigate()}
          >
            <ChatsBtn />
          </StyledChatsBtn>

          <AddChatButtonWrapper
            type="button"
            onClick={() => setModalActive(true)}
          >
            <AddChatButton />
          </AddChatButtonWrapper>

          <PublicChatsList />
          <UserProfile />
        </StyledNav>

        <SearchBar>
          <Title>
            {isPrivateChat ? "Private messages" : "Public messages"}
          </Title>

          <Form>
            <SearchIcon />
            <SearchInput
              type="text"
              placeholder="Find or start a conversation"
              value={value}
              onChange={handleSearchValue}
            />
          </Form>
          <FriendsLinkWrapper>
            <ContactIcon />
            <FriendsLink to={"friends/all"}>Friends</FriendsLink>
          </FriendsLinkWrapper>

          <PrivateChatList searchValue={value} />
        </SearchBar>
      </StyledSideBar>

      <Modal active={modalActive} setActive={setModalActive}>
        <ChatModal users={results} setActive={setModalActive} />
      </Modal>
      <Outlet />
    </>
  );
}
