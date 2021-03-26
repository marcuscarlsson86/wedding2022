import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./components/header";
import { HeroImage } from "./components/hero";

function App() {
  return (
    <div className="App">
      <Navigation />
      <HeroImage />
    </div>
  );
}

export default App;
