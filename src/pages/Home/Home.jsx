import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.mainBlock}>
      <h1>Phonebook</h1>
      <p className={css.text}>Hello...</p>
      {!isLoggedIn && (
        <p className={css.textLast}>
          If you want to see a phonebook, please to{" "}
          <Link className={css.link} to="/register">
            Register
          </Link>{" "}
          or{" "}
          <Link className={css.link} to="/login">
            Login
          </Link>{" "}
          in this application.
        </p>
      )}
    </div>
  );
};

export default Home;
