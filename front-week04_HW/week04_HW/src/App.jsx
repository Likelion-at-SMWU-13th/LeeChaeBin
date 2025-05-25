import React from "react";
import "./App.css";
import googleLogo from "./assets/google_logo.png";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";

function App() {
  return (
    <>
      <Header />
      <img src={googleLogo} />
      <SearchBox />
    </>
  );
}

export default App;
