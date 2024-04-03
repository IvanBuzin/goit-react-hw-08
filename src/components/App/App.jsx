import "../../../node_modules/modern-normalize/modern-normalize.css";
import { Route, Routes } from "react-router-dom";
import Loader from "../Loader/Loader";
import PrivatRoute from "../PrivatRoute/PrivatRoute";
import Layout from "../Layout/Layout";
import AppBar from "../AppBar/AppBar";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { Suspense, lazy, useEffect } from "react";
import css from "./App.module.css";
import { Toaster } from "react-hot-toast";

const Contacts = lazy(() => import("../../Pages/Contacts/Contacts"));
const Login = lazy(() => import("../../Pages/Login/Login"));
const Register = lazy(() => import("../../Pages/Register/Register"));
const Home = lazy(() => import("../../Pages/Home/Home"));

const App = () => {
  const dispatch = useDispatch();
  const refreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <AppBar />
      <Layout>
        {refreshing ? (
          <Loader />
        ) : (
          <div className={css.main}>
            <Suspense fallback={<Loader />}>
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
                <Route
                  path="/contacts"
                  element={<PrivatRoute component={<Contacts />} />}
                />
              </Routes>
            </Suspense>
          </div>
        )}
      </Layout>
      <Toaster position="top-right" />
    </div>
  );
};

export default App;
