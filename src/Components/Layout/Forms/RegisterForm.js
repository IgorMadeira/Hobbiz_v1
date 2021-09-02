import { useState } from "react";
import styles from "./RegisterForm.module.css";
import Backdrop from "../../UI/Backdrop";
import Card from "../../UI/Card";

const RegisterForm = (props) => {
  const formContent = (
    <>
      <Backdrop onClick={props.registerFormToggler} />
      <div>
        <Card>Register Form</Card>
      </div>
    </>
  );

  return (
    <div className={styles["register-form"]}>
      {props.isVisible && formContent}
    </div>
  );
};

export default RegisterForm;
