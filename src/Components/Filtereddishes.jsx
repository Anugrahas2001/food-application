import React, { useState } from "react";
import NotAvailable from "./NotAvailable";
import Pagination from "./Pagination";
import Card from "./Card";

function Filtereddishes(props) {

  let [foodImg, setFoodImg] = useState([]);
  let [activeDish, setActiveDish] = useState("Beef");
  let [currentPage, setCurrentPage] = useState(1);
  let [itemPerPage, setItemPerPage] = useState(4);

  let maxDish=8;

  //Index of last dish
  let lastdishIndex = currentPage * itemPerPage;

  //Index of first dish
  let firstDishIndex = lastdishIndex - 4;

  let slicedImages = foodImg.slice(firstDishIndex, lastdishIndex);


  //Display single Dish
  let singleDish = props.singleDish.map((dish,Index) => {
    if(Index<maxDish)
    {
      return (
        <li>
          <img src={dish.strMealThumb} alt={dish.strMeal} />
          <h5>{dish.strMeal}</h5>
        </li>
      );
    }
  });

  //Display all the category images
  function showCategoryImages(categoryname) {
    props.setSingleDish([]);
    setActiveDish(categoryname);
    let displayImage = props.foodMenu
      .filter((item) => {
        return item.strCategory === categoryname;
      })
      .map((Dish) => {
        return (
            <Card Dish={Dish}/>
        );
      });
    setFoodImg(displayImage);
  }

  //Display all the categories name
  let catogiries = props.filteredDish.map((Dish) => {
    return (
      <li
        className={`list ${Dish.strCategory === activeDish ? "active" : ""}`}
        onClick={() => {
          showCategoryImages(Dish.strCategory);
        }}
      >
        {Dish.strCategory}
      </li>
    );
  });

  return (
    <div className="filteredDishes">
      <div className="filteredDishes-container">
        <h1>Choose Your choice</h1>
        <div className="filteredDishes-dishes">
          <ul className="filteredDishes-category flex flex-wrap">
            {catogiries}
            <div className="filteredDishes-images">
          <ul className="filteredDishes-show flex flex-wrap">
                {singleDish}
              </ul>
            </div>
          </ul>
        </div>
        <div className="filteredDishes-images">
          <ul className="filteredDishes-show flex flex-wrap">
            {singleDish!=0||foodImg.length != 0 ? slicedImages : <NotAvailable />}
            <Pagination
              totalDishes={foodImg}
              itemPerPage={itemPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Filtereddishes;
