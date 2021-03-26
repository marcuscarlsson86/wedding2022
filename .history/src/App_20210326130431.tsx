import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Navigation from "./components/header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation></Navigation>
      </header>
    </div>
  );
}

export default App;
