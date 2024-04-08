import "../../../node_modules/modern-normalize/modern-normalize.css";
import { Route, Routes } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../../redux/auth/operations";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import { Suspense, lazy, useEffect } from "react";
import css from "./App.module.css";
import { Toaster } from "react-hot-toast";

const Contacts = lazy(() => import("../../pages/Contacts/Contacts"));
const Login = lazy(() => import("../../pages/Login/Login"));
const Register = lazy(() => import("../../pages/Register/Register"));
const Home = lazy(() => import("../../pages/Home/Home"));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <div>
      <Layout>
        {isRefreshing ? (
          <b>Refreshing user, please wait...</b>
        ) : (
          <div className={css.main}>
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/register"
                  element={<RestrictedRoute component={<Register />} />}
                  redirectTo="/contacts"
                />
                <Route
                  path="/login"
                  element={<RestrictedRoute component={<Login />} />}
                  redirectTo="/contacts"
                />
                <Route
                  path="/contacts"
                  element={
                    <PrivateRoute
                      component={<Contacts />}
                      redirectTo="/login"
                    />
                  }
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
