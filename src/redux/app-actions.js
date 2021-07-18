import { createAction } from "@reduxjs/toolkit";

export const addContactRequest = createAction("app/addContactRequest");
export const addContactSuccess = createAction("app/addContactSuccess");
export const addContactError = createAction("app/addContactError");

export const deleteContactRequest = createAction("app/deleteContactRequest");
export const deleteContactSuccess = createAction("app/deleteContactSuccess");
export const deleteContactError = createAction("app/deleteContactError");

/* export const addContact = createAction("app/addContact", (newContact) => ({
  payload: {
    id: uuidv4(),
    name: newContact.name,
    number: newContact.number,
  },
}));
 */
export const onChangeFilter = createAction("app/onChangeFilter");

// export const deleteContact = createAction("app/deleteContact");

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
/* export default {
  addContactRequest,
  addContactSuccess,
  addContactError,
};
 */
