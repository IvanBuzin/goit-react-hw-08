import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { userLogOut } from "../../redux/auth/operations";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.titleName}>
      <p>Hello: {user.name}</p>
      <button type="button" onClick={() => dispatch(userLogOut())}>
        LogOut
      </button>
    </div>
  );
};

export default UserMenu;
