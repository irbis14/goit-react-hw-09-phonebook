import { Switch, Redirect } from "react-router-dom";
import { Component, lazy, Suspense } from "react";
import { connect } from "react-redux";
import { authOperations } from "./redux/auth";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";
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
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage" /*webpackChunkName: "not-found-page"*/)
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
              color="#1beabd"
              height={15}
              width={80}
            />
          }
        >
          <Switch>
            <PublicRoute exact path="/" component={HomePage} />
            <PublicRoute
              path="/register"
              restricted
              redirectTo="/contacts"
              component={RegisterPage}
            />
            <PublicRoute
              path="/login"
              restricted
              redirectTo="/contacts"
              component={LoginPage}
            />
            <PrivateRoute
              path="/contacts"
              redirectTo="/login"
              component={PhonebookPage}
            />
            <PublicRoute>
              <Redirect to="/404" /> <NotFoundPage />
            </PublicRoute>
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
