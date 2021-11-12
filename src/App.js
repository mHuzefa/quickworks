import Button from "@mui/material/Button";
import React, { useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SellerDashboard from "./screens/SellerDashboard";
import PostBuyerRequest from "./screens/PostBuyerRequest";
import BuyerRequest from "./screens/BuyerRequest";
import ManageOrders from "./screens/ManageOrders";
import SellerProfile from "./screens/SellerProfile";
import { Divider, IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";
import { ThemeChangeContext } from "./context/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

function App() {
  const theme = useTheme();
  const colorMode = useContext(ThemeChangeContext);
  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.background.default;
    return () => {
      document.body.style.backgroundColor = null;
    };
  });
  return (
    <Router>
      <Header />
      <Divider />
      {/* {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color='inherit'>
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton> */}
      <SellerDashboard />
    </Router>
  );
}

export default App;
