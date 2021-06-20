import styles from "./ContactsItem.module.css";

const ContactsItem = ({ items, onDeleteContact }) => {
  return items.map((item) => {
    return (
      <li key={item.id} className={styles.list__item}>
        {item.name}: {item.number}
        <button
          name={item.name}
          type="button"
          className={styles.button__delete}
          onClick={onDeleteContact}
        >
          Delete
        </button>
      </li>
    );
  });
};

export default ContactsItem;
