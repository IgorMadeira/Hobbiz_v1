import styles from "./App.module.css";
import Header from "./Components/Layout/Header";
import Sidebar from "./Components/Layout/Sidebar";
import { useState } from "react";
import Card from "./Components/UI/Card";
import Viewport from "./Components/Layout/Viewport";
import Content from "./Components/Layout/Content";
import Footer from "./Components/Layout/Footer";
import FeedPost from "./Components/UI/FeedPost";

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const sidebarToggler = () => {
    setShowSidebar((prevState) => {
      setShowSidebar(!prevState);
    });
  };

  return (
    <>
      <Header sidebarToggler={sidebarToggler} />
      <Sidebar isVisible={showSidebar} sidebarToggler={sidebarToggler} />
      <Viewport>
        <Content>
          <Card />
          <FeedPost />
          <Card />
          <Card />
          <Card />
        </Content>
      </Viewport>
      <Footer />
    </>
  );
}

export default App;
