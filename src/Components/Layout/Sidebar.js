import styles from "./Sidebar.module.css";
import React from "react";
import Backdrop from "../UI/Backdrop";
import { FaWindowClose } from "react-icons/fa";
import Button from "../UI/Button";

const Sidebar = (props) => {
  const sidebarStyle = props.isVisible
    ? `${styles.sideBar} ${styles.show}`
    : `${styles.sideBar} ${styles.hide}`;

  const sidebarContent = () => {
    return (
      <React.Fragment>
        <Backdrop onClick={props.sidebarToggler} />
        Sidebar
        <Button onClick={props.sidebarToggler} className="none">
          <FaWindowClose />
        </Button>
        <hr />
      </React.Fragment>
    );
  };

  return (
    <div className={sidebarStyle}>
      {props.isVisible ? sidebarContent() : ""}
    </div>
  );
};

export default Sidebar;
