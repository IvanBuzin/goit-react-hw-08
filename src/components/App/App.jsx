// import { useDispatch } from "react-redux";
import "../../../node_modules/modern-normalize/modern-normalize.css";
// import { ContactForm } from "../ContactForm/ContactForm";
// import { ContactList } from "../ContactList/ContactList";
// import { SearchBox } from "../SearchBox/SearchBox";
// import css from "./App.module.css";
// import { useEffect } from "react";
// import { fetchContacts } from "../../redux/contactsOps";
import Navigation from "../Navigation/Navigation";

import { Route, Routes } from "react-router-dom";
import Contacts from "../../Pages/Contacts/Contacts";
import Register from "../../Pages/Register/Register";
import Login from "../../Pages/Login/Login";
import Home from "../../Pages/Home/Home";

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
