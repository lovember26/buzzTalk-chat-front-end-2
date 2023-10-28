import { Outlet } from "react-router-dom";
import Profile from "../Profile/Profile";

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
