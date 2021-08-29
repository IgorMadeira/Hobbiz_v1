import styles from "./MainPage.module.css";

const MainPage = (props) => {
  return <div className={styles["main-page"]}>{props.children}</div>;
};

export default MainPage;
