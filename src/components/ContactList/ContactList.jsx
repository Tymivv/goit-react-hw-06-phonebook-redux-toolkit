import './ContactList.css';
import { useSelector } from 'react-redux';
import { contactsActions } from '../Redux/Contacts';

  


const ContactList = ({  onDelete }) => {

  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(({ nameContact }) =>
      nameContact.toLowerCase().includes(normalizedFilter)
    );
  };


  return (


    <ul className="list">
      {filteredContacts().map(({ id, nameContact, tel }) => (
        <>
          <li className="item" key={id}>
            {nameContact} : {tel}
          </li>
          <button className="button9" type="button" onClick={onDelete(id)}>
            Delete {nameContact}
          </button>
        </>
      ))}
    </ul>
  );

  
}
export default ContactList;
