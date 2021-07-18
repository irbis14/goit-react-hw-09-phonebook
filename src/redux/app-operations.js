import axios from "axios";
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from "./app-actions";

axios.defaults.baseURL = "http://localhost:4040";

const addContact = (newContact) => (dispatch) => {
  const items = {
    name: newContact.name,
    number: newContact.number,
  };

  dispatch(addContactRequest());

  axios
    .post("/contacts", items)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch((error) => dispatch(addContactError(error)));
};

const deleteContact = (id) => (dispatch) => {
  dispatch(deleteContactRequest());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch((error) => dispatch(deleteContactError(error)));
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  addContact,
  deleteContact,
};
