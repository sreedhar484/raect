import React from "react";
import "./App.css";
import Main from "./components/main";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Log from "./components/log";
import Pophover from "./components/Pophover";
import Paginate from "./components/Paginate";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Main />
      {/* <Pophover /> */}
      {/* <Paginate /> */}
    </ThemeProvider>
  );
}

export default App;
