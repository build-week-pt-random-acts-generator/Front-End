import React from "react";
import "./App.css";
import Nav from "./Components/Nav.js";
import AppRouter from "./Components/AppRouter.js";

function App() {
  return (
    <div className="App">
      <Nav />
      <AppRouter />
    </div>
  );
}

export default App;
