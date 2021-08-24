import Body from "./Body";
import Sidebar from "./Sidebar";
import "./Viewport.css";

const Viewport = () => {
  return (
    <div className="viewPort">
      <Sidebar className="sidebar" />
      <Body className="main-content" />
    </div>
  );
};

export default Viewport;
