// import NoFriends from "../../NoFriends/NoFriends";
// import NoFriends from "components/ChatRooms/SideBar/NoFriends/NoFriends";

import NoFriends from "components/ChatRooms/NoFriends/NoFriends";
import { AddFriendWrapper } from "../AddFriend/AddFriend.styled";
import { AllFriendsListTitle, FriendsList, ItemWrapper } from "./AllFriends.styled";
import { ReactComponent as MoreIcon } from "../../../../images/more-gray.svg";

import { ReactComponent as MessageIcon } from "../../../../images/message-gray.svg";
import { useEffect, useState } from "react";
import { fetchFriends } from "services/friendsApi";
import RemoveFriendPopUp from "./RemoveFriendPopUp/RemoveFriendPopUp";

export default function AllFriends() {
const [isOpen, setIsOpen]=useState(false);
const [userFriends, setUserFriends]=useState(null)
  useEffect(()=>{
    const getFriends = async () => {
      const data = await fetchFriends();
      console.log(data);
      setUserFriends(data);
    
    };
    getFriends();
    
  },[])
  const handleMoreIcon=()=>{
    console.log("hello");
    setIsOpen(prevState => !prevState)
    console.log(isOpen);
  }
  return (
  <>
  {(userFriends && userFriends.length>0) ? <AddFriendWrapper>
    <AllFriendsListTitle>All friends</AllFriendsListTitle>
  <FriendsList>
    {userFriends.map(friend=>{
      console.log(friend);
      return <ItemWrapper key={friend.username}>
        <div style={{display:"flex", gap:"13px", alignItems:"center"}}>
          <img src={friend.image} alt="avatar"></img>
          <div>
            <p>{friend.username}</p>
            <p style={{color:"#D9D9D9",fontSize: "10px",}}>offline</p>
            </div>
            </div>
      <div>
        <MessageIcon style={{marginRight:"8px"}}/>
        <button type="button" onClick={handleMoreIcon} className="ignore-click"><MoreIcon pointerEvents="none"/></button>
      <RemoveFriendPopUp isOpen={isOpen} setIsOpen={setIsOpen} username={friend.usename}/>
       
        </div>
     
      </ItemWrapper>
      
    })}
    
    
  </FriendsList>
  </AddFriendWrapper> : <NoFriends text={"There are no friends yet"} />}
  </>
)}
