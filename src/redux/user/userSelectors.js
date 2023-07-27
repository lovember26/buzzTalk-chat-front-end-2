export const selectUserId = (state) => state.user.id;
export const selectUserName = (state) => state.user.username;
export const selectEmail = (state) => state.user.email;

export const selectUserFirstName = (state) => state.user.first_name;
export const selectUserLAstName = (state) => state.user.last_name;

export const selectUserError = (state) => state.user.error;
export const selectUserIsLoggedIn = (state) => state.user.isLoggedIn;
