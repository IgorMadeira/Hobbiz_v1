import styles from "./Sidebar.module.css";
import React from "react";
import Backdrop from "../UI/Backdrop";

const Sidebar = (props) => {
  const sidebarStyle = props.isVisible
    ? `${styles.sideBar} ${styles.show}`
    : `${styles.sideBar} ${styles.hide}`;

  const sidebarContent = () => {
    return (
      <React.Fragment>
        <Backdrop onClick={props.sidebarToggler} />
        Sidebar
        <button onClick={props.sidebarToggler}>Close</button>
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
