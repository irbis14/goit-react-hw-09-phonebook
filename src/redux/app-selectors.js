/* eslint-disable import/no-anonymous-default-export */
import { createSelector } from "reselect";

const getItems = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;
const getLoading = (state) => state.contacts.loading;

const getFilterContact = createSelector(
  [getItems, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }
);

export default {
  getItems,
  getFilter,
  getLoading,
  getFilterContact,
};
