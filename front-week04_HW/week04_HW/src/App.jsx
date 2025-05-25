import React from "react";
import "./App.css";
import googleLogo from "./assets/google_logo.png";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Shortcut1 from "./components/Shortcut1";
import Shortcut2 from "./components/Shortcut2";
import Shortcut3 from "./components/Shortcut3";
import Shortcut4 from "./components/Shortcut4";
import Shortcut5 from "./components/Shortcut5";
import Shortcut6 from "./components/Shortcut6";

function App() {
  return (
    <>
      <Header />
      <img src={googleLogo} />
      <SearchBox />
      <Shortcut1 />
    </>
  );
}

export default App;
