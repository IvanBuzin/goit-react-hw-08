import { FaPhoneAlt, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";

export const Contact = ({ contacts: { name, number, id } }) => {
  const dispatch = useDispatch();

  const formatNumber = (inputNumber) => {
    const pattern = /(\d{3})(\d{2})(\d{2})/;
    const formatedNumber = inputNumber.replace(pattern, "$1-$2-$3");
    return formatedNumber;
  };

  return (
    <div className={css.item}>
      <div className={css.paragraph}>
        <p>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.user} />
          {formatNumber(number)}
        </p>
      </div>
      <button
        className={css.button}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};
