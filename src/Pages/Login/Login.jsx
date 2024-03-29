import { Field, Form, Formik, ErrorMessage } from "formik";
import { useId } from "react";
import { useDispatch } from "react-redux";
import { userLogIn } from "../../redux/auth/operations";

const Login = () => {
  const dispatch = useDispatch();
  const nickNameId = useId();
  const passwordId = useId();

  const handleSubmit = (values, actions) => {
    const userInfo = {
      name: values.name,
      password: values.password,
    };
    dispatch(userLogIn(userInfo));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        password: "",
      }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor={nickNameId}>Username</label>
        <Field type="text" name="name" id={nickNameId} />
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

export default Login;
