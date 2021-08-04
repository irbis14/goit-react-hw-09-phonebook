import { useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { operations, selectors } from "../../redux";

import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectors.getItems);
  const addContact = (newContact) => {
    dispatch(operations.addContact(newContact));
  };

  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "name":
        setNewName(value);
        break;

      case "number":
        setNewNumber(value);
        break;

      default:
        console.log("Something is wrong");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      contacts.find((oldContact) => {
        return oldContact.name.toLowerCase() === newName.toLowerCase();
      })
    ) {
      alert(`${newName.name} is already in contacts`);
    } else {
      addContact({ name: newName, number: newNumber });
    }

    reset();
  };

  const reset = () => {
    setNewName("");
    setNewNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="name">
        Name
        <input
          className={styles.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={newName}
          onChange={handleChange}
        />
      </label>
      <label className={styles.label}>
        Number
        <input
          className={styles.input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={newNumber}
          onChange={handleChange}
        />
      </label>
      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default memo(ContactForm);
