import { useEffect } from "react";
import ContactForm from "../ContactForm/ContactForm";
import ContactList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import * as storage from "../Servises/localStorage";
import { useSelector, useDispatch } from 'react-redux';
//import { setContacts, addContacts, deleteContacts } from '../Redux/Contacts/contactsActions';
//import * as actions from 'redux/cities/citiesActions';
import { contactsActions } from '../Redux/Contacts';


import { nanoid } from "nanoid";

const STORAGE_KEY = "contacts";

const App = () => {
  // const [contacts, setContacts] = useState(storage.get(STORAGE_KEY) ?? []);
  // const [filter, setFilter] = useState("");

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const forStoragContacts = storage.get(STORAGE_KEY);
    if (forStoragContacts) {
      dispatch(contactsActions.setContacts(forStoragContacts));
    }
  }, [dispatch]);

  useEffect(() => {
    storage.save(STORAGE_KEY, contacts);
  }, [contacts]);

  ////////додає контакт

  const addContacts1 = ({ name, number }) => {
    if (
      contacts.some(
        ({ id, nameContact, tel }) =>
          nameContact.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`name "${name}" is already in list`);
      return;
    }
    const newContact = {
      id: nanoid(),
      nameContact: name,
      tel: number,
    };
    console.log(newContact);
    // setContacts((prevContacts) => [...prevContacts, newContact]);
    dispatch(contactsActions.addContacts(newContact));
    console.log(contacts);
  };
  // шукає контакт

  const handleFilterChange = (value) => {
    filter(value);
  };



  ////видаляє контакт

  // deleteContacts = id => {
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => contact.id !== id),
  //   }));
  // };

  const deleteContacts1 = (id) => () => {
    // console.log(contacts);
    dispatch(contactsActions.deleteContacts(id));
    // contacts((prevContacts) =>
    //   prevContacts.filter((contact) => contact.id !== id)
    // );
  };
  ///////////////
  return (
    <div>
      <h1>Phonebooc</h1>
      <ContactForm onSubmit={addContacts1} />

      <Filter
        value={filter}
        onChange={(e) => handleFilterChange(e.target.value)}
      />

      <ContactList
        onDelete={deleteContacts1}
        // filteredContacts={getFilteredContacts()}
      />
    </div>
  );
};

export default App;
