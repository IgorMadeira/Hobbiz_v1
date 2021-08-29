import styles from "./App.module.css";
import Header from "./Components/Header";
import Content from "./Components/Content";
import MainPage from "./Components/MainPage";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <MainPage>
        <Header />
        <div className={styles["viewport"]}>
          <Sidebar />
          <Content />
        </div>
      </MainPage>
    </>
  );
}

export default App;
