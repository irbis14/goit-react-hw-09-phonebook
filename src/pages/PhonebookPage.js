import { connect } from "react-redux";
import { operations, selectors, onChangeFilter } from "../redux";

import { Component } from "react";
import ContactForm from "../components/ContactForm";
import Filter from "../components/Filter";
import Contacts from "../components/Contacts";
import ContactsItem from "../components/ContactsItem";
import Loader from "react-loader-spinner";

import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import stylesLoader from "../components/Loader/Loader.module.css";
import styles from "./PhonebookPage.module.css";

class PhonebookPage extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    const { filter, onChangeFilter, deleteContact, isLoading } = this.props;
    return (
      <div className={styles.container}>
        <h1>Phonebook</h1>
        <ContactForm />

        <Filter onChangeFilter={onChangeFilter} />
        {isLoading && (
          <Loader
            className={stylesLoader.Loader}
            type="ThreeDots"
            color="#31eecb"
            height={15}
            width={80}
          />
        )}
        <Contacts>
          <ContactsItem items={filter} onDeleteContact={deleteContact} />
        </Contacts>
      </div>
    );
  }
}

const mapStateToProps = (state, _) => {
  return {
    filter: selectors.getFilterContact(state),
    isLoading: selectors.getLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContact: () => dispatch(operations.fetchContact()),
    onChangeFilter: (e) => dispatch(onChangeFilter(e.target.value)),
    deleteContact: (e) => dispatch(operations.deleteContact(e.target.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookPage);
