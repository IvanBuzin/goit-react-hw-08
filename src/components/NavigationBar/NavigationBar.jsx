import { useSelector } from "react-redux";
import { selectIsLogged } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import Navigation from "../Navigation/Navigation";
import RegistrationMenu from "../RegistrationMenu/RegistrationMenu";
import css from "./NavigationBar.module.css";

const NavigationBar = () => {
  const isLogin = useSelector(selectIsLogged);
  return (
    <div className={css.nav}>
      <Navigation />
      {isLogin ? <UserMenu /> : <RegistrationMenu />}
    </div>
  );
};

export default NavigationBar;
