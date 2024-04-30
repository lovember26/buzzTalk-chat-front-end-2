import { PopUpContainer } from "./EditPublicChatPhotoPopUp.styled";
import { ReactComponent as AddPhoto} from "../../../../images/add-photo.svg";
import { ReactComponent as RemovePhoto} from "../../../../images/remove-photo.svg";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { generatePublicChatTGravatarThunk, removePublicChatImageThunk } from "redux/chat/chatThunk";
import { useChat } from "contexts/ChatContext";

export default function EditPublicChatPhotoPopUp({setFile, setIsPopUpOpen, setImage}){
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();
const {publicChatId}=useChat();
    const handleClick = () => {
    
        fileInputRef.current.click();
       
       
      };
      const editAvatar = ({ target }) => {
        
        const selectedFile = target.files[0];
        const objectURL = URL.createObjectURL(selectedFile);
        setFile(selectedFile);
        setImage(objectURL);
    setIsPopUpOpen(false);
      };
      const handleRemoveAvatar = async () => {
       
        await dispatch(removePublicChatImageThunk(publicChatId));
        setIsPopUpOpen(false);
        setImage(null);
      };
      const handleSetGravatar = async () => {
      
        await dispatch(generatePublicChatTGravatarThunk(publicChatId));
      
        setIsPopUpOpen(false);
      };
    return(
        <PopUpContainer>
            <ul >
                <li>
                    <button className="add-photo-button" onClick={handleClick}><AddPhoto/>Add Photo</button>
                    <input  type="file"
                ref={fileInputRef}
                onChange={editAvatar}
                accept="image/*,.png,.jpg,.gif,.web,.webp" style={{display: 'none'}}></input>
                </li>
                
                <li>
                <button type="button" className="remove-photo-button" onClick={handleRemoveAvatar}><RemovePhoto/>Remove Photo</button>
                </li>
                <li>
                <button type="button" className="set-photo-button" onClick={handleSetGravatar}> Set Photo</button>
                </li>
            </ul>
        </PopUpContainer>
    )
}