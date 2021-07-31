import styles from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Sorry, page is not found
        <span className={styles.icon} role="img" aria-label="Person Shrugging">
          🤷
        </span>
      </h1>
    </div>
  );
};

export default NotFoundPage;
