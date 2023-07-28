export const selectAccessToken = (state) => state.auth.accessToken;
export const selectRefreshToken = (state) => state.auth.refreshToken;
export const selectAuthIsLoggedIn = (state) => state.auth.isLoggedIn;

export const selectAuthRegisterStatus = (state) => state.auth.statuses.register;
export const selectAuthLoginStatus = (state) => state.auth.statuses.login;
export const selectAuthLogoutStatus = (state) => state.auth.statuses.logout;

export const selectAuthRegisterError = (state) => state.auth.errors.register;
export const selectAuthLoginError = (state) => state.auth.errors.login;
export const selectAuthLogoutError = (state) => state.auth.errors.logout;
