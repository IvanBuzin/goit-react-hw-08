import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { userLogIn } from "../../redux/auth/operations";
import { toast } from "react-hot-toast";
import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    if (!values.email.trim() || !values.password.trim()) {
      return toast.error("Not all fields are filled in!");
    }
    dispatch(userLogIn(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form className={css.mainForm} autoComplete="off">
        <div className={css.inputList}>
          <div>
            <label className={css.label}>Your email</label>
            <Field className={css.input} type="text" name="email" />
            <ErrorMessage
              name="email"
              component="span"
              style={{ color: "red" }}
            />
          </div>
          <div className={css.inputItem}>
            <label className={css.label}>Password</label>
            <Field className={css.input} type="text" name="password" />
            <ErrorMessage
              name="password"
              component="span"
              style={{ color: "red" }}
            />
          </div>

          <button className={css.button} type="submit">
            Log In
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
