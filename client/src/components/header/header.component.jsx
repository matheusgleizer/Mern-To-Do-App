import reactLogo from "./logos/reactLogo.svg";
import jsLogo from "./logos/jsLogo.png";
import mongoLogo from "./logos/mongoLogo.png";
import expressLogo from "./logos/expressLogo.png";
import "./header.style.css";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <h1>MERN To Do App</h1>
        <img src={expressLogo} className="App-logo" alt="expressLogo" />
        <img src={reactLogo} className="App-logo" alt="reactLogo" />
        <img src={jsLogo} className="App-logo js-logo" alt="nodeLogo" />
        <img src={mongoLogo} className="App-logo" alt="mongoLogo" />
      </header>
    </div>
  );
};

export default Header;
