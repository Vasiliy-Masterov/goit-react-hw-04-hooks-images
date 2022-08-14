import PropTypes from 'prop-types';
import styles from './Filter.module.css';

export const Filter = ({ findContacts }) => {
  return (
    <lable className={styles.filter_lable}>
      Find contacts by name
      <input
        className={styles.filter_input}
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={findContacts}
      />
    </lable>
  );
};

Filter.propTypes = {
  findContacts: PropTypes.func.isRequired,
};
