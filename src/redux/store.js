import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contacts/contactsSlice";
import { filtersReducer } from "./filtersSlice";
import { authReducer } from "./auth/authorizationSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    authReducer: authReducer,
  },
});
