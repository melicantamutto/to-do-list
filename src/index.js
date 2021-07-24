import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";


let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#6d6875",
    },
    secondary: {
      main: "#ffb4a2",
    },
    textPrimary: {
      main: "#ffcdb2",
    },
    secondaryBackground: {
      main: "#b5838d",
    },
    danger: {
      main: "#e5989b",
    },
  },
});




theme = responsiveFontSizes(theme);

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
