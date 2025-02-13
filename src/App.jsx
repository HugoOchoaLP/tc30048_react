import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const nombre = "Hugo Ochoa";
  const elemento = <h1> Hello, {nombre} </h1>;
  const [count, setCount] = useState(0);
  const sum = () => {
    setCount(count + 1);
    console.log(count);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{count} </p>
        <button onClick={sum}> add</button>
        <p>
          <strong> {elemento} </strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
