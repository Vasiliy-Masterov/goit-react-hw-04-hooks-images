import PropTypes from 'prop-types';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

export const ContactForm = ({ addContact }) => {
  const [contactName, setContactName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;
    switch (name) {
      case 'name':
        setContactName(value);
        break;
      case 'number':
        setContactNumber(value);
        break;
      default:
        break;
    }
  };

  const handleOnSubmit = event => {
    event.preventDefault();
    const contactData = {
      id: nanoid(5),
      name: contactName,
      number: contactNumber,
    };

    addContact(contactData);

    setContactName('');
    setContactNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleOnSubmit}>
      <lable className={styles.form_lable}>
        Name:
        <input
          className={styles.form_input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={contactName}
          onChange={handleInputChange}
        />
      </lable>
      <lable className={styles.form_lable}>
        Number:
        <input
          className={styles.form_input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={contactNumber}
          onChange={handleInputChange}
        />
      </lable>
      <button className={styles.form_button} type="submit">
        Add contact
      </button>
    </form>
  );
};

ContactForm.propTypes = {
  addContact: PropTypes.func.isRequired,
};
