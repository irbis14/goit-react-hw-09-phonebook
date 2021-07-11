import { v4 as uuidv4 } from "uuid";

export const addContact = (newContact) => ({
  type: "app/addContact",
  payload: {
    id: uuidv4(),
    newContact: newContact,
  },
});

export const onChangeFilter = (e) => ({
  type: "app/onChangeFilter",
  payload: e.target.value,
});

export const filterContact = (value) => ({
  type: "app/filterContact",
  payload: value,
});

export const deleteContact = (e) => ({
  type: "app/deleteContact",
  payload: {
    deleteName: e.target.name,
  },
});
