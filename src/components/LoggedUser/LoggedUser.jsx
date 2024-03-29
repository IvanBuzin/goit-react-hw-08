import { useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selector";

const LoggedUser = () => {
  const user = useSelector(selectUser);
  return (
    <div>
      <p>{user.name}</p>
      <button type="button">LogOut</button>
    </div>
  );
};

export default LoggedUser;
