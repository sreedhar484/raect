import React from "react";
import "./App.css";
import Main from "./components/main";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import Toast from "./components/Toast";

function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      {/* <Toast /> */}
      <Main />
    </ThemeProvider>
  );
}

export default App;
