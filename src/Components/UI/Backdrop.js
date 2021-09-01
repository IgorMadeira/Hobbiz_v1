import reactDOM from "react-dom";
import styles from "./Backdrop.module.css";

const Backdrop = (props) => {
  return reactDOM.createPortal(
    <div className={styles.backdrop} onClick={props.onClick}></div>,
    document.getElementById("modal")
  );
};

export default Backdrop;
