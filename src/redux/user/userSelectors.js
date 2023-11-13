export const selectAllUsers = (state) => state.user.all;

export const selectUserId = (state) => state.user.id;
export const selectUserName = (state) => state.user.username;
export const selectUserEmail = (state) => state.user.email;
export const selectUserImage = (state) => state.user.image;
export const selectUserDescription = (state) => state.user.description;

export const selectUserIsLoggedIn = (state) => state.user.isLoggedIn;
export const selectIsFetchingCurrentUser = (state) =>
  state.user.isFetchingCurrentUser;

export const selectUserCurrentStatus = (state) => state.user.statuses.current;
export const selectGeneratedGravatarStatus = (state) =>
  state.user.statuses.generateGravatar;

export const selectUserCurrentError = (state) => state.user.errors.current;
