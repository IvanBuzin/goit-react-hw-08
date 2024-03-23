import { selectFilteredContacts } from "../../redux/contactsSlice";
import { Contact } from "../Contact/Contact";
import css from "./ContactList.module.css";
import { nanoid } from "nanoid";
import { useSelector } from "react-redux";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return filteredContacts.length > 0 ? (
    <ul className={css.contactList}>
      {filteredContacts.map((item) => (
        <li key={nanoid()} className={css.contactListItem}>
          <Contact contacts={item} />
        </li>
      ))}
    </ul>
  ) : (
    <p>Phonebook is empty</p>
  );
};
