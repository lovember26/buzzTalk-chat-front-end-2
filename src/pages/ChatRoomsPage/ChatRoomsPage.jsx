import { SideBar } from "components/ChatRooms/SideBar/SideBar";
import { RoomsWrapper } from "./ChatRooms.styled";
import { Outlet } from "react-router-dom";

export const ChatRoomsPage = () => {
  return (
    <RoomsWrapper>
      <SideBar />
      <Outlet />
    </RoomsWrapper>
  );
};
