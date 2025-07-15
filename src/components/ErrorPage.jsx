import styles from "../styles/ErrorPage.module.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = ({ errorCode = 404, message = "Page Not Found" }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.errorCode}>{errorCode}</h1>
        <p className={styles.message}>{message}</p>
        <button className={styles.button} onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
