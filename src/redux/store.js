import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  contacts: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filter: "",
  name: "",
  number: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "app/addContact":
      if (
        state.contacts.find((oldContact) => {
          return (
            oldContact.name.toLowerCase() ===
            payload.newContact.name.toLowerCase()
          );
        })
      ) {
        alert(`${payload.newContact.name} is already in contacts`);
      } else {
        return payload.newContact;
      }
      return {
        ...state,
        contacts: {
          ...state.contacts,
          contacts: payload.id,
          ...payload.newContact,
        },
      };

    case "app/onChangeFilter":
      return {
        ...state,
        filter: payload,
      };

    case "app/filterContact":
      const normalizedFilter = state.filter.toLowerCase();
      return {
        ...state,
        filter: state.contacts.filter((contact) =>
          contact.name.toLowerCase().includes(normalizedFilter)
        ),
      };

    case "app/deleteContact":
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.name !== payload.deleteName
        ),
      };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
