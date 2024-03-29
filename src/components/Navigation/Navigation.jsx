import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLogged } from "../../redux/auth/selector";
import LoggedUser from "../LoggedUser/LoggedUser";
import RegistrationMenu from "../RegistrationMenu/RegistrationMenu";

const Navigation = () => {
  const logIn = useSelector(selectIsLogged);
  return (
    <header className={css.head}>
      <nav className={css.navigate}>
        <ul className={css.listLink}>
          <li>
            <NavLink
              className={({ isActive }) => {
                return clsx(css.link, isActive && css.active);
              }}
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                return clsx(css.link, isActive && css.active);
              }}
              to="/contacts"
            >
              Contacts
            </NavLink>
          </li>
        </ul>
        {logIn ? <LoggedUser /> : <RegistrationMenu />}
      </nav>
    </header>
  );
};

export default Navigation;
