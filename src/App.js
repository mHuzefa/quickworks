import Button from "@mui/material/Button";
import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import SellerDashboard from "./screens/SellerDashboard";
import PostBuyerRequest from "./screens/PostBuyerRequest";
import BuyerRequest from "./screens/BuyerRequest";
import ManageOrders from "./screens/ManageOrders";
import SellerProfile from "./screens/SellerProfile";

function App() {
  return (
    <Router>
      <Header />
      <SellerProfile />
    </Router>
  );
}

export default App;
