import styles from "./Button.module.css";

const Button = (props) => {
  let btnStyle = `${styles.button}`;
  if (props.color) {
    btnStyle += ` ${styles[props.color]}`;
  }

  if (props.className && props.className.includes("none")) {
    btnStyle = styles.none;
  }

  return (
    <button
      className={`${btnStyle}`}
      onClick={props.onClick}
      style={props.style}
    >
      {props.children}
    </button>
  );
};

export default Button;
