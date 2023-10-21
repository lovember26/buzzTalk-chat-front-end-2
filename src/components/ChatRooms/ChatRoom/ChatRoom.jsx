import Profile from "../Profile/Profile";
import { Outlet } from "react-router-dom";

export default function ChatRoom() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
      }}
    >
      <Profile />
      <Outlet />
    </div>
  );
}
