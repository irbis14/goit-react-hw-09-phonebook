import { Route, Switch, Redirect } from "react-router-dom";
import { lazy, Suspense } from "react";
import Container from "./components/Container";
import AppBar from "./components/Navigation/AppBar";

import Loader from "react-loader-spinner";
import styles from "./components/Loader/Loader.module.css";

const HomePage = lazy(() =>
  import("./pages/HomePage" /*webpackChunkName: "home-page"*/)
);
const PhonebookPage = lazy(() =>
  import("./pages/PhonebookPage" /*webpackChunkName: "phonebook-page"*/)
);
const LoginPage = lazy(() =>
  import("./pages/LoginPage" /*webpackChunkName: "login-page"*/)
);
const RegisterPage = lazy(() =>
  import("./pages/RegisterPage" /*webpackChunkName: "register-page"*/)
);

const App = () => (
  <>
    <Container>
      <AppBar />
      <Suspense
        fallback={
          <Loader
            className={styles.Loader}
            type="ThreeDots"
            color="#31eecb"
            height={15}
            width={80}
          />
        }
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contacts" component={PhonebookPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/register" component={RegisterPage} />
          {/*  <Route>
          <Redirect to="/404" /> <NotFoundPage />
        </Route> */}
        </Switch>
      </Suspense>
    </Container>
  </>
);

export default App;

/* import { connect } from "react-redux";
import { operations, selectors, onChangeFilter } from "./redux";

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

export default connect(mapStateToProps, mapDispatchToProps)(App);
 */
