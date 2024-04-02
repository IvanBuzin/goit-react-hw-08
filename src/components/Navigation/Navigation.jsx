import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../../redux/auth/selectors";

const Navigation = () => {
  const logIn = useSelector(selectIsLogged);
  return (
    <header className={css.head}>
      <nav className={css.listLink}>
        <NavLink
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.active);
          }}
          to="/"
        >
          Home
        </NavLink>

        {logIn && (
          <NavLink
            className={({ isActive }) => {
              return clsx(css.link, isActive && css.active);
            }}
            to="/contacts"
          >
            Contacts
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
