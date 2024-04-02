import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { userLogIn } from "../../redux/auth/operations";

const LoginForm = () => {
  const dispatch = useDispatch();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    const userInfo = {
      email: values.email,
      password: values.password,
    };
    dispatch(userLogIn(userInfo));
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
      <Form>
        <label htmlFor={emailId}>Your email</label>
        <Field type="text" name="email" id={emailId} />
        <ErrorMessage name="name" component="span" style={{ color: "red" }} />
        <label htmlFor={passwordId}>Password</label>
        <Field type="text" name="password" id={passwordId} />
        <ErrorMessage
          name="password"
          component="span"
          style={{ color: "red" }}
        />
        <button type="submit">Confirm</button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
