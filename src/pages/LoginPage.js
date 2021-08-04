import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { authOperations } from "../redux/auth";
import styles from "./LoginPage.module.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const onLogin = useCallback(
    (user) => dispatch(authOperations.logIn(user)),
    [dispatch]
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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

    onLogin({ email, password });

    setEmail("");
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Log in</h1>

      <form onSubmit={handleSubmit} className={styles.form} autoComplete="off">
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
            Log in
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
