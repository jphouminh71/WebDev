import logo from "./logo.svg";
import "./App.css";
import Greeting from "./components/Greeting/Greeting";
import Testing from "./components/HelloWorld/testing";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Basic React App!
        </a>
        <Greeting />
      </header>
    </div>
  );
}

export default App;
