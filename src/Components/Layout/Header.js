import Button from "../UI/Button";
//import SearchInput from "../UI/SearchInput";
import styles from "./Header.module.css";
import { BiMenu } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";

const Header = (props) => {
  const headerRef = useRef();
  const staticHeaderRef = useRef();

  const [didScroll, setDidScroll] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  if (!didScroll) {
    const setScrolled = () => {
      setDidScroll(true);
    };
    window.addEventListener("scroll", setScrolled);
  }

  useEffect(() => {
    setLastScrollTop(window.scrollY);
    const timerID = setTimeout(() => {
      if (didScroll) {
        let navbarHeight = staticHeaderRef.current.offsetHeight;
        const currentScrollTop = window.scrollY;
        const delta = 25;

        if (currentScrollTop > navbarHeight) {
          if (currentScrollTop - lastScrollTop > delta) {
            //scrolled down
            headerRef.current.classList.remove(styles["nav-up"]);
            headerRef.current.classList.add(styles["nav-down"]);
          } else if (lastScrollTop - currentScrollTop > delta) {
            //scrolled up
            headerRef.current.classList.remove(styles["nav-down"]);
            headerRef.current.classList.add(styles["nav-up"]);
          }
        } else {
          //at top
          headerRef.current.classList.remove(styles["nav-up"]);
          headerRef.current.classList.add(styles["nav-down"]);
        }
      }

      setDidScroll(false);
    }, 250);

    return () => clearTimeout(timerID);
  }, [didScroll, lastScrollTop]);

  return (
    <>
      <div
        className={`${styles["scroll-header"]} ${styles["nav-down"]}`}
        ref={headerRef}
      >
        HOBBIZ :)
      </div>
      <div className={styles["main-header"]} ref={staticHeaderRef}>
        <div className={styles["header-content"]}>
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
            <Button color="blue" onClick={props.registerFormToggler}>
              CADASTRAR
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
