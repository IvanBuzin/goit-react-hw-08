import ContactForm from "../../components/ContactForm/ContactForm";
import ContactList from "../../components/ContactList/ContactList";
import SearchBox from "../../components/SearchBox/SearchBox";

const Contacts = () => {
  return (
    <div>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default Contacts;
