import styles from "./Viewport.module.css";

const Viewport = (props) => {
  return <div className={styles.viewport}>{props.children}</div>;
};

export default Viewport;
