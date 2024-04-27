import React from "react";
import Banner from "./Banner";
import Header from "./Header";
import Specialdishes from "./Specialdishes";
import Filtereddishes from "./Filtereddishes";
import Footer from "./Footer";
import AllMenu from "./AllMenuContext";

function Menu() {

  return (
    <div>
      <Header />
      <Banner />
      <AllMenu>
        <Specialdishes/>
        <Filtereddishes/>
      </AllMenu>
      <Footer />
    </div>
  );
}

export default Menu;
