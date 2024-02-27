import {
  ActionButton,
  ActionList,
  AvatarBlock,
  ItemsList,
  ItemsWrapper,
  Wrapper,
} from "./FriendInfo.styled";
import { ReactComponent as ShowUserInfoIcon } from "../../../images/arrow-left-vertical.svg";
import { ReactComponent as HideUserInfoIcon } from "../../../images/arrow-right-vertical.svg";
import { ReactComponent as AddIcon } from "../../../images/friend-info-add.svg";
import { ReactComponent as CallIcon } from "../../../images/friend-info-call.svg";
import { ReactComponent as VideoIcon } from "../../../images/friend-info-video.svg";
import { ReactComponent as MuteIcon } from "../../../images/friend-info-mute.svg";
import { ReactComponent as MoreIcon } from "../../../images/friend-info-more.svg";
import { ReactComponent as CopyIcon } from "../../../images/friend-info-copy.svg";
import { ReactComponent as ShareIcon } from "../../../images/friend-info-share.svg";
import { ReactComponent as ClearIcon } from "../../../images/friend-info-clear.svg";
import { ReactComponent as BlockIcon } from "../../../images/friend-info-block.svg";
import { useEffect, useState } from "react";
// import { useLocation } from "react-router";
import { fetchUserByUsername } from "services/userApi";
import GroupChatInfo from "../GroupChatInfo/GroupChatInfo";

import { useChat } from "contexts/ChatContext";

export default function FriendInfo() {
  const [showInfo, setShowInfo] = useState(false);
  // const { search } = useLocation();
  // const params = new URLSearchParams(search);
  // const username = params.get("username");
  const [userInfo, setUserInfo] = useState(null);

  const { privateChatName, isPrivateChat } = useChat();

  useEffect(() => {
    const getUser = async () => {
      if(privateChatName){
      const data = await fetchUserByUsername(privateChatName);
      setUserInfo(data);
      setShowInfo(false);}
    };
    getUser();
  }, [privateChatName]);

  return !showInfo ? (
    <div
      style={{
        display: "flex",
        marginLeft: "-14px",
        zIndex: "9",
      }}
    >
      <button
        type="button"
        onClick={() => {
          setShowInfo(true);
        }}
      >
        <ShowUserInfoIcon />
      </button>
    </div>
  ) : (
    <Wrapper>
      <ActionButton
        type="button"
        onClick={() => {
          setShowInfo(false);
        }}
      >
        <HideUserInfoIcon />
      </ActionButton>
      {isPrivateChat ? <ItemsWrapper>
        <AvatarBlock>
          <img src={userInfo.image} alt="avatar"></img>
          <p>@{privateChatName}</p>
        </AvatarBlock>
        <ActionList>
          <li className="list-item">
            <ItemsList>
              <li>
                <button type="button">
                  <CallIcon />
                  <p>call</p>
                </button>
              </li>
              <li>
                <button type="button">
                  <VideoIcon />
                  <p>video</p>
                </button>
              </li>
              <li>
                <button type="button">
                  <MuteIcon />
                  <p>mute</p>
                </button>
              </li>
              <li>
                <button type="button">
                  <AddIcon />
                  <p>add friend</p>
                </button>
              </li>
              <li>
                <button type="button">
                  <MoreIcon />
                  <p>more</p>
                </button>
              </li>
            </ItemsList>
          </li>
          <li className="list-item about-me">
            <p className="about-me-title">about me</p>
            <p>{userInfo.description}</p>
          </li>
          <li className="list-item">
            <ul className="copy-share-item">
              <li>
                <button type="button">
                  <p>Copy Username</p>
                  <CopyIcon />
                </button>
              </li>
              <li>
                <button type="button">
                  <p>Share Contact</p>
                  <ShareIcon />
                </button>
              </li>
            </ul>
          </li>
          <li className="list-item clear-item">
            <button>
              <p>Clear Messages</p>
              <ClearIcon />
            </button>
          </li>
          <li className="list-item block-item">
            <button>
              <p>Block User</p>
              <BlockIcon />
            </button>
          </li>
        </ActionList>
        </ItemsWrapper> : <GroupChatInfo/>}
    </Wrapper>
  );
}
