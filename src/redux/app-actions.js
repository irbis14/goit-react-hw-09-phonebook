import actionTypes from "./app-types";
import { v4 as uuidv4 } from "uuid";

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
  payload: {
    deleteName: value,
  },
});
