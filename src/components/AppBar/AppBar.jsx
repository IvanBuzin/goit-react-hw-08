import { useSelector } from "react-redux";
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import RegistrationMenu from "../AuthNav/AuthNav";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return (
    <header className={css.header}>
      <Navigation />
      <h1 className={css.title}>Phonebook</h1>
      {!isRefreshing && (
        <div>{isLoggedIn ? <UserMenu /> : <RegistrationMenu />}</div>
      )}
    </header>
  );
};

export default AppBar;
