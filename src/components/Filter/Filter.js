import PropTypes from "prop-types";
import styles from "./Filter.module.css";

const Filter = ({ onChangeFilter }) => {
  return (
    <div className={styles.filter__container}>
      <label htmlFor="filter" className={styles.label}>
        Find contacts by name
        <input
          className={styles.input}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func,
};

export default Filter;
