import { useSelector } from "react-redux";
import { selectIsLogged } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLogged);
  return isLoggedIn ? <Navigate to="/contacts" /> : Component;
};

export default RestrictedRoute;
