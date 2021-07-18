import { createAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
// import actionTypes from "./app-types";

export const addContact = createAction("app/addContact", (newContact) => ({
  payload: {
    id: uuidv4(),
    name: newContact.name,
    number: newContact.number,
  },
}));

export const onChangeFilter = createAction("app/onChangeFilter");

export const deleteContact = createAction("app/deleteContact");

/* Without Redux Toolkit

export const addContact = (newContact) => ({
  type: actionTypes.ADD_CONTACT,
  payload: {
    id: uuidv4(),
    name: newContact.name,
    number: newContact.number,
  },
});

export const onChangeFilter = (value) => ({
  type: actionTypes.ON_CHANGE_FILTER,
  payload: value,
});

export const deleteContact = (value) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: value,
}); */
