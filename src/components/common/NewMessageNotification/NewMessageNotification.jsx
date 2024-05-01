import { useEffect } from "react";
import { NotificationWrapper, NowWrap } from "./NewMessageNotification.styled";

export default function NewMessageNotification({setIsVisible, notification}) {
  useEffect(() => {

   setIsVisible(true);
 
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000);

   
    return () => clearTimeout(timer);
  }, [setIsVisible]);
    return (
    notification &&  <NotificationWrapper>
        <NowWrap>Now</NowWrap>
        <img src={notification.contact.image} alt="avatar" />
        <div><p>{notification.contact.username}</p>
        <p>{notification.content}</p></div></NotificationWrapper>
    );
  }
  