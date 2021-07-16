import { combineReducers } from "redux";
import actionTypes from "./app-types";

const INITIAL_STATE = {
  contacts: {
    items: [],
    filter: "",
  },
};

const items = (state = INITIAL_STATE.contacts.items, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CONTACT:
      return [...state, payload];

    case actionTypes.DELETE_CONTACT:
      return state.filter((contact) => contact.name !== payload.deleteName);

    default:
      return state;
  }
};

const filter = (state = INITIAL_STATE.contacts.filter, { type, payload }) => {
  switch (type) {
    case actionTypes.ON_CHANGE_FILTER:
      return payload;

    default:
      return state;
  }
};

const contactsReducer = combineReducers({ items, filter });

export default contactsReducer;
