import React from "react";
// import { ReactComponent as DefaultIcon } from "../../../../images/default.svg";
import NoPrivateChatsSvg from "images/svg/NoPrivateChatsSvg/NoPrivateChatsSvg";
import { NoFriendsWrap } from "./NoPrivateChats.styled";

export default function NoPrivateChats() {
  return (
    <NoFriendsWrap>
      <NoPrivateChatsSvg />
      <p>No friends yet</p>
      <button type="button>">Find a friend</button>
    </NoFriendsWrap>
  );
}
