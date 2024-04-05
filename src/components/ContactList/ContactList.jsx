import { useEffect } from "react";
import { selectFilteredContacts } from "../../redux/contacts/selectors";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { nanoid } from "nanoid";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();
  const isloggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isloggedIn) {
      dispatch(fetchContacts());
    }
  }, [dispatch, isloggedIn]);

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
export default ContactList;
