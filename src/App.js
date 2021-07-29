import { Route, Switch, Redirect } from "react-router-dom";
import { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { authOperations } from "./redux/auth";
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

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
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
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
