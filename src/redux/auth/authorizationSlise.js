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
      }),
  //   .addCase(userLogIn.pending, (state, action) => {})
  //   .addCase(userLogIn.fulfilled, (state, action) => {
  //     state.isLoggedIn = true;
  //   })
  //   .addCase(userLogIn.rejected, (state, action) => {})
  //   .addCase(userLogOut.pending, (state, action) => {})
  //   .addCase(userLogOut.fulfilled, (state, action) => {})
  //   .addCase(userLogOut.rejected, (state, action) => {}),
});

export const authReducer = authSlice.reducer;
