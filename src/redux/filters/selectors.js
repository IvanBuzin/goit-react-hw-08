import { createSelector } from "@mui/material/styles/createTransitions";
import { selectContacts } from "../contacts/selectors";

export const selectNameFilter = (state) => state.filters.name;
export const selectFilteredContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, nemeFilter) => {
    return contacts.filters((contact) =>
      contact.name.toLowerCase().includes(nemeFilter.toLowerCase())
    );
  }
);
