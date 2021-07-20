/* eslint-disable import/no-anonymous-default-export */
const getItems = (state) => state.contacts.items;
const getFilter = (state) => state.contacts.filter;
const getLoading = (state) => state.contacts.loading;

const getFilterContact = (state) => {
  const contacts = getItems(state);
  const filter = getFilter(state);
  const normalizedFilter = filter.toLowerCase();

  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export default {
  getItems,
  getFilter,
  getLoading,
  getFilterContact,
};
