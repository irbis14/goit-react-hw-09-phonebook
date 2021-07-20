import { connect } from "react-redux";
import * as actions from "./redux/app-actions";
import operations from "./redux/app-operations";
import selectors from "./redux/app-selectors";

import { Component } from "react";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import Contacts from "./components/Contacts";
import ContactsItem from "./components/ContactsItem";
import Loader from "react-loader-spinner";

import "./App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import styles from "./components/Loader/Loader.module.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    const { filter, onChangeFilter, deleteContact, isLoading } = this.props;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />

        <Filter onChangeFilter={onChangeFilter} />

        {isLoading && (
          <Loader
            className={styles.Loader}
            type="ThreeDots"
            color="#9aecdb"
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

const mapStateToProps = (state, props) => {
  return {
    filter: selectors.getFilterContact(state),
    isLoading: selectors.getLoading(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchContact: () => dispatch(operations.fetchContact()),
    onChangeFilter: (e) => dispatch(actions.onChangeFilter(e.target.value)),
    deleteContact: (e) => dispatch(operations.deleteContact(e.target.id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
