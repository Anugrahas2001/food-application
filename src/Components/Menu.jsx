import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Banner from "./Banner";
import Header from "./Header";
import Specialdishes from "./Specialdishes";
import Filtereddishes from "./Filtereddishes";
import Footer from "./Footer";
import AllMenu from "./AllMenuContext";
import AddToCartItems from "./AddToCartItems";
import Checkout from "./Checkout";
import {AppProvider} from "../context/AppProvider";

function Menu() {
  return (
    <Router>
      <div>
        <AppProvider>
        <Header />
        <Banner />
        <AllMenu>
          <Specialdishes />
          <Filtereddishes />
        </AllMenu>
        <Footer />

        <Routes>
          <Route path="/" element={<AllMenu />} />
          <Route path="/cart" element={<AddToCartItems />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
        </AppProvider>
      </div>
    </Router>
  );
}

export default Menu;