import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { userRegister } from "../../redux/auth/operations";
import { useId } from "react";

const Register = () => {
  const dispatch = useDispatch();
  const nickNameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    const userInfo = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(userRegister(userInfo));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={nickNameId}>Username</label>
        <Field type="text" name="name" id={nickNameId} />
        <ErrorMessage name="name" component="span" style={{ color: "red" }} />

        <label htmlFor={emailId}>Email</label>
        <Field type="text" name="email" id={emailId} />
        <ErrorMessage name="email" component="span" style={{ color: "red" }} />

        <label htmlFor={passwordId}>Password </label>
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
export default Register;
