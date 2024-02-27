import { PopUpWrapper } from "./AddFriendPopUp.styled";
import {ReactComponent as AddedFriendIcon} from '../../../images/added-friend-pop-up.svg'
import {ReactComponent as RemoveFriendIcon} from '../../../images/remove-friend-pop-up.svg'
import {ReactComponent as CancelFriendIcon} from '../../../images/cancel-gray.svg'
import { useChat } from "contexts/ChatContext";
import { addFriend, removeFriend } from "services/friendsApi";
import { useEffect } from "react";


export default function AddFriendPopUp({isOpen, setIsOpen}) {
  const {isFriend,setIsFriend, isPrivateChat, privateChatName}=useChat();
 

  const handleAddFriend=()=>{
    if(isPrivateChat){
      addFriend(privateChatName);
    setIsFriend(true);}
  setIsOpen(false);
  }

  const handleRemoveFriend=()=>{
    if(isPrivateChat){
     console.log("hello");
      removeFriend(privateChatName);
    setIsFriend(false);}
  setIsOpen(false);
  }
const handleCancel=()=>{
  
setIsOpen(false);
}

useEffect(()=>{

  const handleEscKey = event => {
    if (event.key === 'Escape') {
      setIsOpen(false);
    }
  }
  const handleClickOutside=(event)=>{
  
    if (isOpen && !event.target.classList.contains('ignore-click')) {
      setIsOpen(false);
    }
  }
  if( isOpen) {
    window.addEventListener('click', handleClickOutside);
    window.addEventListener('keydown', handleEscKey);
  }
 
  return () => {
    window.removeEventListener('click', handleClickOutside);
    window.removeEventListener('keydown', handleEscKey);
  };
},[isOpen, setIsOpen])
    return (
      isOpen && <PopUpWrapper >
      <ul>
        <li>
          
       {isFriend ? <button type="button"  className="white-button"><AddedFriendIcon/><span>Added</span></button> : <button className="white-button" onClick={handleAddFriend}><AddedFriendIcon/><span>Add Friend</span></button>}
        </li>
        <li>
         
          {isFriend ? <button type="button" onClick={handleRemoveFriend} className="red-button"> <RemoveFriendIcon/><span>Remove</span></button> :  <button type="button" className="gray-button" onClick={handleCancel}> <CancelFriendIcon/><span>Cancel</span></button>}
      </li></ul>
      </PopUpWrapper>
    );
  }