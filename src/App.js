import React from "react";
import "./App.css";
import Main from "./components/main";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Main />
    </ThemeProvider>
  );
}

export default App;
