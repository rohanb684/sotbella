import styles from "./AbsLink.module.css";

const AbsLink = ({ children }) => {
  return (
    <a className={styles.link}>
      {children} <span>&rarr;</span>
    </a>
  );
};

export default AbsLink;
