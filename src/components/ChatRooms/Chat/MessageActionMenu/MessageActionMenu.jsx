import {ReactComponent as ReplyIcon} from "../../../../images/reply-message.svg"
import {ReactComponent as EditIcon} from "../../../../images/edit-message.svg"
import {ReactComponent as DeleteIcon} from "../../../../images/delete-message.svg"
import {ReactComponent as LineIcon} from "../../../../images/message-menu-line.svg"
import { Wrapper } from "./MessageActionMenu.styled"

import { deleteMessageWebSocketChat } from "websocketChat"

export default function MessageActionMenu({position,message, socket,setIsReply,setReplyMessageId,setReplyTo, messageAuthorName,setIsEdit, setMessage}){
    const handleDelete=()=>{
        setIsEdit(false);
        setIsReply(false);
        deleteMessageWebSocketChat(socket,message.id)
    }

    const handleReply =()=> {
       setIsEdit(false);
       setMessage("");
        setIsReply(true);
        setReplyMessageId(message.id);
        setReplyTo(message.author[0].username);
      };
      const handleEdit=()=>{
        setIsEdit(true);
        setMessage(message.content);
        setIsReply(false);
      }
    return(
        position.x !== null && position.y !== null && (
            <Wrapper style={{ position: 'absolute', top: position.y, left: position.x }}>
        <ul><li><button  onClick={handleReply}><ReplyIcon/><span>Reply</span></button>
        <LineIcon/></li>
        <li><button onClick={handleEdit}><EditIcon/><span>Edit</span></button><LineIcon/></li>
        <li><button onClick={handleDelete} ><DeleteIcon/><span className="delete-message-text">Delete</span></button></li></ul></Wrapper>
       
    ))
}