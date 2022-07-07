import logo from "./logo.svg";
import * as React from "react";
import "./App.css";

function App() {
  const currentTime = new Date();
  const fullTime = currentTime - window.performance.timing.requestStart;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>We rendered this React app in </h3>
        <div>{fullTime.toString()}ms</div>
      </header>
    </div>
  );
}

export default App;
