
import {ReactComponent as AddedFriendIcon} from '../../../../../images/added-friend-pop-up.svg'
import {ReactComponent as RemoveFriendIcon} from '../../../../../images/remove-friend-pop-up.svg'


import { removeFriend } from "services/friendsApi";
import { useEffect } from "react";
import { PopUpWrapper } from './RemoveFrienfPopUp.styled';



export default function RemoveFriendPopUp({isOpen, setIsOpen,username}) {

 

 

  const handleRemoveFriend=()=>{
   
     
      removeFriend(username);
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
          
       <button type="button"  className="white-button" onClick={handleRemoveFriend} ><AddedFriendIcon/><span>Delete Friend</span></button>
        </li>
        <li>
         
         <button type="button" className="red-button" onClick={handleCancel}> <RemoveFriendIcon/><span>Cancel</span></button> </li></ul>
      </PopUpWrapper>
    );
  }