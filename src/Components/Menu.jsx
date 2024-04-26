import axios from "axios";
import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import Header from "./Header";
import Specialdishes from "./Specialdishes";
import Filtereddishes from "./Filtereddishes";
import Loader from "./Loader";
import Footer from "./Footer";

//Named export
export const AllMenuContext = React.createContext();

function Menu() {
  // const API_URL="https://www.themealdb.com/api/json/v1/1/search.php?f=a"

  let [food, setFood] = useState([]);
  let [filteredDishes, setFilteredDishes] = useState([]);
  let [loading, setLoading] = useState(false);
  let [singleDish, setSingleDish] = useState([]);

  //Api to diaplay dishes
  //fetching data from api using axios library
  const fetchMenuData = async () => {
    setLoading(true);
    const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
    axios.get(API_URL).then((data) => {
      setFood(data.data.meals);
      setLoading(false);
    });
  };

  //Api to display categories
  const getListOfCategories = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
    axios.get(API_URL).then((categories) => {
      setFilteredDishes(categories.data.categories);
    });
  };

  //Fetch single Dish
  const singleDishes = async () => {
    const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
    axios.get(API_URL).then((categories) => {
      setSingleDish(categories.data.meals);
    });
  };

  useEffect(() => {
    fetchMenuData();
    getListOfCategories();
    singleDishes();
  }, []);
  console.log(food);

  return (
    <div>
      {/* <h1>Welcome to my Food Application</h1> */}
      <Header />
      <Banner />
      <AllMenuContext.Provider value={food}>
        {!loading ? <Specialdishes /> : <Loader />}
        {!loading ? (
          <Filtereddishes
            filteredDish={filteredDishes}
            singleDish={singleDish}
            setSingleDish={setSingleDish}
          />
        ) : null}
      </AllMenuContext.Provider>
      <Footer/>
    </div>
  );
}

export default Menu;
