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
import styled from "styled-components";

const ShortCutContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-top: 3px;
  flex-wrap: wrap;
`;

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

function App() {
  return (
    <>
      <Header />
      <MainBox>
        <img src={googleLogo} />
        <SearchBox />
        <ShortCutContainer>
          <Shortcut1 />
          <Shortcut2 />
          <Shortcut3 />
          <Shortcut4 />
          <Shortcut5 />
          <Shortcut6 />
        </ShortCutContainer>
      </MainBox>
    </>
  );
}

export default App;
