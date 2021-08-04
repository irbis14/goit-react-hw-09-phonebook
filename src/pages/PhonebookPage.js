import { useDispatch, useSelector } from "react-redux";
import { operations, selectors, onChangeFilter } from "../redux";
import { useEffect, useState } from "react";
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import Contacts from "../components/Contacts";
import ContactsItem from "../components/ContactsItem";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import stylesLoader from "../components/Loader/Loader.module.css";
import styles from "./PhonebookPage.module.css";

const PhonebookPage = () => {
  const filter = useSelector(selectors.getFilterContact);
  const isLoading = useSelector(selectors.getLoading);

  const dispatch = useDispatch();
  const onFilterChange = (e) => dispatch(onChangeFilter(e.target.value));
  const deleteContact = (e) => dispatch(operations.deleteContact(e.target.id));

  useEffect(() => {
    dispatch(operations.fetchContact());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />

      <Filter onChangeFilter={onFilterChange} />
      {isLoading && (
        <Loader
          className={stylesLoader.Loader}
          type="ThreeDots"
          color="#1beabd"
          height={15}
          width={80}
        />
      )}
      <Contacts>
        <ContactsItem items={filter} onDeleteContact={deleteContact} />
      </Contacts>
    </div>
  );
};

export default PhonebookPage;
