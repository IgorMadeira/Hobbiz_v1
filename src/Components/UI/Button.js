import styles from "./Button.module.css";

const Button = (props) => {
  let btnStyle = styles.button;

  if (props.className && props.className.includes("none")) {
    btnStyle = styles.none;
  }
  return (
    <button
      className={`${btnStyle} ${styles[props.color]}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
