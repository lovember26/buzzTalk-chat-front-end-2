export const selectUserName = (state) => state.auth.user.username;
export const selectEmail = (state) => state.auth.user.email;
export const selectFirstName = (state) => state.auth.user.first_name;
export const selectLastName = (state) => state.auth.user.last_name;

export const selectAccessToken = (state) => state.auth.accessToken;
export const selectRefreshToken = (state) => state.auth.refreshToken;

export const selectStatus = (state) => state.auth.status;
export const selectError = (state) => state.auth.error;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
