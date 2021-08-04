import { useDispatch, useSelector } from "react-redux";
import { authSelectors, authOperations } from "../../redux/auth";
import styles from "./UserMenu.module.css";
import defaultImage from "./defaultImage.jpg";

const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUsername);
  const onLogout = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <img
          src={defaultImage}
          alt="User avatar"
          width="32"
          className={styles.avatar}
        />
        <span className={styles.name}>Welcome, {name}</span>
      </div>
      <button className={styles.button} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
