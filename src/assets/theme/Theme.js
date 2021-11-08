import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#424242",
    },
    secondary: {
      main: "#FCD736",
    },
    neutral: {
      white: "#fff",
      blackLight: "#666",
      black01: "#333",
      black02: "#444",
      black03: "#555",
      gray: "#999",
      gray01: "#ccc",
      gray02: "#e5e5e5",
      gray03: "#ddd",
      ofWhite: "#f0f0f0",
      blue: "#00698C",
    },
    shadow: {
      shadow01: "1px 1px 3px 1px rgba(0,0,0,0.1)",
    },
    common: {
      radius: "2px",
    },
  },
});

responsiveFontSizes(theme);

const Theme = (props) => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Theme;
