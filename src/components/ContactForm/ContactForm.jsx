import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useId } from "react";
import css from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations";
import { notifi, addContactToast, addContactErrToast } from ;
import { selectContacts } from "../../redux//contacts/slice";

export const ContactForm = () => {
  const dispatch = useDispatch();
  const userNameId = useId();
  const userNumberId = useId();
  const contacts = useSelector(selectContacts);

  const initialValues = { name: "", number: "" };

  const userSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too Long!")
      .required("Required"),
  });

  const handleSubmit = (value, actions) => {
    contacts.find((contact) => contact.name.trim("") === values.name.trim(""))
      ? notifi()
      : (dispatch(addContact(values))
          .unwrap()
          .then(() => {
            addContactToast(values.name);
          }),
        actions.resetForm());
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={userSchema}
    >
      <Form className={css.form}>
        <div className={css.formInput}>
          <label htmlFor={userNameId}>Name</label>
          <Field
            className={css.formInputField}
            type="text"
            name="name"
            id={userNameId}
          />
          <ErrorMessage name="name" component="span" style={{ color: "red" }} />
        </div>
        <div className={css.formInput}>
          <label htmlFor={userNumberId}>Number</label>
          <Field
            className={css.formInputField}
            type="tel"
            name="number"
            id={userNumberId}
          />
          <ErrorMessage
            name="number"
            component="span"
            style={{ color: "red" }}
          />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
