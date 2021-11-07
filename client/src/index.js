import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    black: "#000000",
    darkGray: "#333333",
    lightGray: "#F2F2F2",
    gray3: "#828282",
    gray4: "#BDBDBD",
    blue: "#2F80ED",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
