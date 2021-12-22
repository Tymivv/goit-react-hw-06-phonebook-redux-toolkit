// import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
//import { changeFilter } from '../Redux/Contacts/contactsActions';
import { contactsActions } from '../Redux/Contacts';

const Filter = ({ value, onChange }) => {

  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();
  return (
    <label className="heading">
      Find contact by name
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={filter}
        onChange={e => dispatch(contactsActions.changeFilter(e.target.value))}
      />
    </label>
  );

  // Filter.propTypes = {
  //   value: PropTypes.string,
  //   // onChange: PropTypes.func,
  // };
};
export default Filter;
