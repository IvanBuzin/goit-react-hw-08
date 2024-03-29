import { FaPhoneAlt, FaUser, FaPhoneVolume } from "react-icons/fa";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export const Contact = ({ contacts: { name, number, id } }) => {
  const dispatch = useDispatch();

  return (
    <div className={css.item}>
      <div className={css.paragraph}>
        <div>
          <p className={css.paragraphName}>
            <FaUser className={css.icon} size={14} />
            {name}
          </p>
          <p>
            <FaPhoneAlt className={css.user} size={14} />
            {number}
          </p>
        </div>
        <a className={css.phoneLink} href={`tel:${number}`}>
          <FaPhoneVolume className={css.phoneIcon} size={20} />
        </a>
      </div>
      <hr className={css.line} />

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

export default Contact;
