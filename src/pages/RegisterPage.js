import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";

import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const onRegister = useCallback(
    (user) => dispatch(authOperations.register(user)),
    [dispatch]
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;

      case "email":
        setEmail(value);
        break;

      case "password":
        setPassword(value);
        break;

      default:
        console.log("Something is wrong");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onRegister({ name, email, password });

    setName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign up</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
        <label className={styles.label}>
          Name
          <input
            className={styles.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          E-mail
          <input
            className={styles.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          Password
          <input
            className={styles.input}
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <div className={styles.button__container}>
          <button className={styles.button} type="submit">
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;
