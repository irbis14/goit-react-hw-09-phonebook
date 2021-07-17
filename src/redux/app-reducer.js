import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./app-actions";
// import actionTypes from "./app-types";

const INITIAL_STATE = {
  contacts: {
    items: [],
    filter: "",
  },
};

const items = createReducer(INITIAL_STATE.contacts.items, {
  [actions.addContact]: (state, { payload }) => [...state, payload],
  [actions.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer(INITIAL_STATE.contacts.filter, {
  [actions.onChangeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({ items, filter });

export default contactsReducer;

/* Without Redux Toolkit

const items = (state = INITIAL_STATE.contacts.items, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD_CONTACT:
      return [...state, payload];

    case actionTypes.DELETE_CONTACT:
      return state.filter((contact) => contact.name !== payload);

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
 */
