import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  onChangeFilter,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./app-actions";
// import actionTypes from "./app-types";

const INITIAL_STATE = {
  contacts: {
    items: [],
    filter: "",
  },
};

const items = createReducer(INITIAL_STATE.contacts.items, {
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== +payload),
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer(INITIAL_STATE.contacts.filter, {
  [onChangeFilter]: (_, { payload }) => payload,
});

const contactsReducer = combineReducers({ items, filter, loading });

export default contactsReducer;
