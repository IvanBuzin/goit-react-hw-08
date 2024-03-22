import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialContacts = {
  items: [],
};
const slice = createSlice({
  name: "contacts",
  initialState: initialContacts,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        state.items.push(action.payload);
      },
      prepare(contact) {
        return {
          payload: {
            id: nanoid(),
            ...contact,
          },
        };
      },
    },

    deleteContact: (state, action) => {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = slice.actions;
export const contactsReducer = slice.reducer;
export const selectContacts = (state) => state.contacts.items;
