import React from "react";
import "./App.css";
import { LeftSideBar } from "./composants/LetftSideBar/index";
import { MainPage } from "./composants/MainPage";

function App() {
  return (
    <div className="App col-md-8 col-12 offset-md-2">
      <MainPage />
    </div>
  );
}

export default App;
