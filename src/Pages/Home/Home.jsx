import { useSelector } from "react-redux";
import { selectIsLogged } from "../../redux/auth/selectors";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLogged);
  return (
    <div>
      <h1>PhonebooK</h1>
      {!isLoggedIn && <p>If you want to see a phonebook, please to LogIn.</p>}
    </div>
  );
};

export default Home;
