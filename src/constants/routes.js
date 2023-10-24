export const routes = {
  MAIN_PAGE: "/",
  REGISTER_PAGE: "register",
  LOGIN_PAGE: "login",
  FORGOT_PASSWORD_PAGE: "forgot-password",
  RESET_PASSSWORD_PAGE: "reset-password",
  VERIFY_PAGE: "verify",

  CHAT_ROOMS_PAGE: "/chat-rooms",
  CHAT_ROOMS_FRIENDS_PAGE: "friends",
  FRIENDS_ALL_PAGE: "all",
  FRIENDS_ONLINE_PAGE: "online",
  FRIENDS_BLOCKED_PAGE: "blocked",
  ADD_FRIENDS_PAGE: "add-friend",

  CHAT_ROOMS_CHAT_PAGE: "/chat-rooms/chats",
  // CHAT_ROOMS_PRIVATE_CHAT_PAGE: "/chat-rooms/chats/:username",
  CHAT_ROOMS_PRIVATE_CHAT_PAGE: "/chat-rooms/chats/:chatId",

  PROFILE_PAGE: "/profile",
  EDIT_PROFILE_PAGE: "/profile/edit",

  RESTRICTED_PUBLIC_PAGE: "/chat-rooms/friends",
};
