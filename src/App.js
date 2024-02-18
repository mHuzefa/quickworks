import React, { useContext, useEffect } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SellerDashboard from "./screens/SellerDashboard";
import PostBuyerRequest from "./screens/PostBuyerRequest";
import BuyerRequest from "./screens/BuyerRequest";
import ManageOrders from "./screens/ManageOrders";
import ManageGigs from "./screens/Manage_Gigs";

import SellerProfile from "./screens/SellerProfile";
import { Divider, IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";
import { ThemeChangeContext } from "./context/ThemeContext";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Categories from "./components/categories/Categories";

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
      {theme.palette.mode} mode
      <IconButton
        sx={{ ml: 1 }}
        onClick={colorMode.toggleColorMode}
        color='inherit'>
        {theme.palette.mode === "light" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>

      <Divider />
      <Categories />
      <Divider />
      <Route component={HomeScreen} path='/' exact />
      <Route component={SellerDashboard} path='/seller_dashboard' />
      <Route component={SellerProfile} path='/users' />
      <Route component={BuyerRequest} path='/buyer_requests' />
      <Route component={PostBuyerRequest} path='/post/request' />
      <Route component={ManageOrders} path='/manage_orders' />
      <Route component={ManageGigs} path='/manage_gigs' />
    </Router>
  );
}

export default App;
