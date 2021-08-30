import Button from "./UI/Button";
import styles from "./Header.module.css";
import { BiMenu } from "react-icons/bi";

const Header = (props) => {
  return (
    <div className={styles["main-header"]}>
      <div className={styles["main-logo"]}>
        <h2>
          <Button onClick={props.sidebarToggler} className="none">
            <BiMenu className={styles["menu-stripes"]} /> HOBBIZ
          </Button>
        </h2>
      </div>
      <nav className={styles["header-navbar"]}>
        <ul className={styles["header-navbar-list"]}>
          <ul>Início</ul>
          <ul>Explorar</ul>
          <ul>Quem somos</ul>
        </ul>
      </nav>
      <div className={styles["header-buttons"]}>
        <Button color="orange">ENTRAR</Button>
        <Button color="blue">CADASTRAR</Button>
      </div>
    </div>
  );
};

export default Header;
