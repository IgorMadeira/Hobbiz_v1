import styles from "./Sidebar.module.css";
import React from "react";
import Backdrop from "../UI/Backdrop";
import { FaWindowClose } from "react-icons/fa";
import Button from "../UI/Button";
import SearchInput from "../UI/SearchInput";

const Sidebar = (props) => {
  const sidebarStyle = props.isVisible
    ? `${styles.sideBar} ${styles.show}`
    : `${styles.sideBar} ${styles.hide}`;

  const sidebarContent = () => {
    return (
      <React.Fragment>
        <Backdrop onClick={props.sidebarToggler} />
        <Button
          onClick={props.sidebarToggler}
          className="none"
          style={{ marginLeft: "100%", fontSize: "2.0em", color: "crimson" }}
        >
          <FaWindowClose />
        </Button>
        Sidebar
        <hr />
        <SearchInput />
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
