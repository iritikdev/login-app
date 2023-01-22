import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import "@fontsource/inter";
import "@fontsource/questrial";
import "@fontsource/poppins";

import { ThemeProvider } from "@mui/material";
import { theme } from "./styles/theme";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
