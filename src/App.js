import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { Container, Button, Row, Col } from "react-bootstrap";
import Viewport from "./Components/Viewport";

function App() {
  return (
    <div className="App">
      <Header />
      <Viewport />
    </div>
  );
}

export default App;
