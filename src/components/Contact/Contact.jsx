import { FaPhoneAlt, FaUser } from "react-icons/fa";
import css from "./Contact.module.css";
import { useState } from "react";
import DeleteForm from "../DeleteForm/DeleteForm";
import EditForm from "../EditForm/EditForm";

export default function Contact({ data: { id, name, number } }) {
  const [editForm, setEditForm] = useState(false);
  const [deleteForm, setDeleteForm] = useState(false);

  const openEditForm = () => {
    setEditForm(true);
  };
  const closeEditForm = () => {
    setEditForm(false);
  };
  const openDeleteForm = () => {
    setDeleteForm(true);
  };
  const closeDeleteForm = () => {
    setDeleteForm(false);
  };

  return (
    <div className={css.item}>
      <div className={css.paragraph}>
        <p className={css.paragraphName}>
          <FaUser className={css.icon} />
          <p>{name}</p>
        </p>
        <p>
          <FaPhoneAlt className={css.user} />
          <p>{number}</p>
        </p>
      </div>
      <div>
        <button className={css.button} type="button" onClick={openEditForm}>
          Edit
        </button>
        <button className={css.button} type="button" onClick={openDeleteForm}>
          Delete
        </button>
      </div>
      {editForm && (
        <EditForm
          isOpen={openEditForm}
          id={id}
          name={name}
          number={number}
          onClose={closeEditForm}
        />
      )}
      {deleteForm && (
        <DeleteForm
          isOpen={openDeleteForm}
          id={id}
          name={name}
          onClose={closeDeleteForm}
        />
      )}
    </div>
  );
}
