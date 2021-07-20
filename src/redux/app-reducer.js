import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  onChangeFilter,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./app-actions";

const INITIAL_STATE = {
  contacts: {
    items: [],
    filter: "",
  },
};

const items = createReducer(INITIAL_STATE.contacts.items, {
  [fetchContactSuccess]: (state, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== +payload),
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
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

const error = createReducer(null, {});

const contactsReducer = combineReducers({ items, filter, loading, error });

export default contactsReducer;
