import { Component } from "react";
import ContactForm from "./components/ContactForm";
import Contacts from "./components/Contacts";
import ContactsItem from "./components/ContactsItem";

import "./App.css";

class App extends Component {
  state = {
    contacts: [
      { name: "Rosie Simpson", number: "459-12-56" },
      { name: "Hermione Kline", number: "443-89-12" },
      { name: "Eden Clements", number: "645-17-79" },
      { name: "Annie Copeland", number: "227-91-26" },
    ],
    name: "Mango",
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <Contacts>
          <ContactsItem items={this.state.contacts} />
        </Contacts>
      </div>
    );
  }
}

export default App;
