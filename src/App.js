import styles from "./App.module.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import MainPage from "./Components/MainPage";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";

function App() {
  const [showSidebar, setShowSidebar] = useState(true);
  const sidebarToggler = () => {
    setShowSidebar((prevState) => {
      setShowSidebar(!prevState);
    });
  };

  return (
    <>
      <MainPage>
        <Header sidebarToggler={sidebarToggler} />
        <div className={styles["viewport"]}>
          {showSidebar && <Sidebar />}
          <Content />
        </div>
      </MainPage>
    </>
  );
}

export default App;
