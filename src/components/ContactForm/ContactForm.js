import { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../redux/app-actions";

import styles from "./ContactForm.module.css";

const INITIAL_STATE = {
  name: "",
  number: "",
};

class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (
      this.props.contacts.find((oldContact) => {
        return oldContact.name.toLowerCase() === this.state.name.toLowerCase();
      })
    ) {
      alert(`${this.state.name} is already in contacts`);
    } else {
      this.props.addContact(this.state);
    }

    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label className={styles.label} htmlFor="name">
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={this.state.name}
            onChange={this.handleChange}
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
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button className={styles.button} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (newContact) => dispatch(actions.addContact(newContact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
