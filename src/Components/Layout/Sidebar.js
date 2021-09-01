import styles from "./Sidebar.module.css";
import React from "react";
const Sidebar = (props) => {
  const sidebarStyle = props.isVisible ? styles.sideBar : styles.invisible;

  const sidebarContent = () => {
    return (
      <React.Fragment>
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
