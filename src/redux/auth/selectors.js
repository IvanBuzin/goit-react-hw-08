export const selectUser = (state) => state.auth.user;

export const selectToken = (state) => state.auth.token;

export const selectLoader = (state) => state.auth.loader;

export const selectIsLogged = (state) => state.auth.isLoggedIn;

export const selectIsRefreshing = (state) => state.auth.isRefreshing;
