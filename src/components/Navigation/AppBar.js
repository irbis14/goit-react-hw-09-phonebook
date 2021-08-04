import { useSelector } from "react-redux";
import Navigation from "./Navigation";
import UserMenu from "../UserMenu";
import AuthNav from "./AuthNav";
import styles from "./AppBar.module.css";
import { authSelectors } from "../../redux/auth";

const AppBar = () => {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
