import css from "./RegistrationMenu.module.css";
import clsx from "clsx";
import { NavLink } from "react-router-dom";

const RegistrationMenu = () => {
  return (
    <ul className={css.listLink}>
      <li>
        <NavLink
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.active);
          }}
          to="/register"
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) => {
            return clsx(css.link, isActive && css.active);
          }}
          to="/login"
        >
          LogIn
        </NavLink>
      </li>
    </ul>
  );
};

export default RegistrationMenu;
