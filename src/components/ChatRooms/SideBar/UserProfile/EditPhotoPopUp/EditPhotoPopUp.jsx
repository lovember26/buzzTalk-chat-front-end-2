import { PopUpContainer } from "./EditPhotoPopUp.styled";
import { ReactComponent as AddPhoto} from "../../../../../images/add-photo.svg";
import { ReactComponent as RemovePhoto} from "../../../../../images/remove-photo.svg";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { generateGravatarUserInfoThunk, removeUserAvatarInfoThunk } from "redux/user/userThunk";

export default function EditPhotoPopUp({setFile, setIsPopUpOpen}){
    const fileInputRef = useRef(null);
    const dispatch = useDispatch();

    const handleClick = () => {
        fileInputRef.current.click();
      };
      const editAvatar = ({ target }) => {
        
        const selectedFile = target.files[0];
        const objectURL = URL.createObjectURL(selectedFile);
        setFile(objectURL);
    setIsPopUpOpen(false);
      };
      const handleRemoveAvatar = async () => {
        await dispatch(removeUserAvatarInfoThunk());
        setIsPopUpOpen(false);
      };
      const handleSetGravatar = async () => {
        await dispatch(generateGravatarUserInfoThunk());
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
                accept="image/*,.png,.jpg,.gif,.web,.webp"></input>
                </li>
                
                <li>
                <button type="button" className="remove-photo-button" onClick={handleRemoveAvatar}><RemovePhoto/> Remove Photo</button>
                </li>
                <li>
                <button type="button" className="set-photo-button" onClick={handleSetGravatar}> Set Photo</button>
                </li>
            </ul>
        </PopUpContainer>
    )
}