import { createSlice } from "@reduxjs/toolkit";
import { userLogIn, userLogOut, userRegister } from "../auth/operations";

const initialUserInfo = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: "authorization",
  initialState: initialUserInfo,
  extraReducers: (builder) =>
    builder
      .addCase(userRegister.pending, (state) => {
        state.loading = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(userLogIn.pending, () => {})
      .addCase(userLogIn.fulfilled, () => {})
      .addCase(userLogIn.rejected, () => {})
      .addCase(userLogOut.pending, () => {})
      .addCase(userLogOut.fulfilled, () => {})
      .addCase(userLogOut.rejected, () => {}),
});

export const authReducer = authSlice.reducer;
