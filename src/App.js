//import styles from "./App.module.css";
import Header from "./Components/Layout/Header";
import Sidebar from "./Components/Layout/Sidebar";
//import { useState } from "react";
import Card from "./Components/UI/Card";
import Viewport from "./Components/Layout/Viewport";
import Content from "./Components/Layout/Content";
import Footer from "./Components/Layout/Footer";
import FeedPost from "./Components/UI/FeedPost";
import RegisterForm from "./Components/Layout/Forms/RegisterForm";
import useShowToggler from "./Components/Hooks/useShowToggler";

function App() {
  const [showSidebar, sidebarToggler] = useShowToggler();
  const [showRegisterForm, registerFormToggler] = useShowToggler();

  return (
    <>
      <Header
        sidebarToggler={sidebarToggler}
        registerFormToggler={registerFormToggler}
      />
      <Sidebar isVisible={showSidebar} sidebarToggler={sidebarToggler} />
      <Viewport>
        <Content>
          <RegisterForm
            isVisible={showRegisterForm}
            registerFormToggler={registerFormToggler}
          />
          <Card />
          <FeedPost />
          <Card />
        </Content>
        <Footer />
      </Viewport>
    </>
  );
}

export default App;
