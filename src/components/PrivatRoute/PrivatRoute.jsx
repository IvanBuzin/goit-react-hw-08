import { useSelector } from "react-redux";
import { selectIsLogged } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivatRoute = ({ component: Component }) => {
  const isLoggedIn = useSelector(selectIsLogged);

  return isLoggedIn ? Component : <Navigate to="/login" />;
};

export default PrivatRoute;
