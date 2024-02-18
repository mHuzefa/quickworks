import React, { createContext } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import getDesignTokens from "../assets/theme/Theme";
export const ThemeChangeContext = createContext({ toggleColorMode: () => {} });
const ThemeContext = (props) => {
  const localMode = localStorage.getItem("mode");
  const [mode, setMode] = React.useState(
    localMode
      ? localMode
      : window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light"
  );
  localStorage.setItem("mode", mode);

  console.log(localMode, mode);
  const toggleColorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(() => (localMode === "light" ? "dark" : "light"));
      },
    }),
    [localMode]
  );

  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeChangeContext.Provider value={toggleColorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </ThemeChangeContext.Provider>
  );
};

export default ThemeContext;
