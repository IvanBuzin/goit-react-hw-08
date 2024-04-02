import "../../../node_modules/modern-normalize/modern-normalize.css";
import { Route, Routes } from "react-router-dom";
import Contacts from "../../Pages/Contacts/Contacts";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import Home from "../../Pages/Home/Home";
import NavigationBar from "../NavigationBar/NavigationBar";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import RestrictedRoute from "../RestrictedRoute";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/register"
          element={<RestrictedRoute component={<Register />} />}
        />
        <Route
          path="/login"
          element={<RestrictedRoute component={<Login />} />}
        />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
};

export default App;
