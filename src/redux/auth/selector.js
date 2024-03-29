export const selectUser = (state) => state.authorization.user;

export const selectToken = (state) => state.authorization.token;

export const selectLoading = (state) => state.authorization.loading;

export const selectIsLogged = (state) => state.authorization.isLoggedIn;
