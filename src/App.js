import React from "react";
import "./App.css";
import Main from "./components/main";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Log from "./components/log";
import Pophover from "./components/Pophover";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Main />
      {/* <Pophover /> */}
    </ThemeProvider>
  );
}

export default App;
