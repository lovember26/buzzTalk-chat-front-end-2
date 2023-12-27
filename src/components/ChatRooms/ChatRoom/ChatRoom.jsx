import { Outlet } from "react-router-dom";
import Profile from "../Profile/Profile";

export default function ChatRoom() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        width: "calc(100% - 336px)",
      }}
    >
      <Profile />
      <Outlet />
    </div>
  );
}
