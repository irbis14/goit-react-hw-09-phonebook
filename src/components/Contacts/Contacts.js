import styles from "./Contacts.module.css";

const Contacts = ({ children }) => {
  return <ul className={styles.list}>{children}</ul>;
};

export default Contacts;
