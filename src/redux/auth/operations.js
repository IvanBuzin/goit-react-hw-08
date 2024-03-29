import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

export const userRegister = createAsyncThunk(
  "authorization/register",
  async (userInfo, thunkAPI) => {
    console.log(userInfo);
    try {
      const response = await axios.post("/users/signup", userInfo);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogIn = createAsyncThunk(
  "authorization/login",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("/users/login", userInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogOut = createAsyncThunk(
  "authorization/logout",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post("/users/logout");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
