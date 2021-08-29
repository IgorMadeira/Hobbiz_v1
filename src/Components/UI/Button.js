import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={`${styles.button} ${styles[props.color]}`}>
      {props.children}
    </button>
  );
};

export default Button;
