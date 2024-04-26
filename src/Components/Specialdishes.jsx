import React, { useContext, useState } from "react";
import PopUp from "./PopUp";
import Card from "./Card";
import { AllMenuContext } from "./Menu";

function Specialdishes() {
  let [readmore, setReadmore] = useState(false);
  let [showPopUp, setShowPopUp] = useState(false);
  let [currentDish, setCurrentDish] = useState(" ");
 let allMenuDishes=useContext(AllMenuContext);

  let maxDishes = 8;

  //Function to show pop-up and we are passing the function tothe child card element
  const showpopupHandler = (dishName) => {
    setCurrentDish(dishName);
    setShowPopUp(true);
  };

  const closeShowPopUpHandler = () => {
    setShowPopUp(false);
  };

  //Displaying every images in Card
  let Dishes = allMenuDishes.map((Dish, index) => {
    if (index < maxDishes) {
      return <Card Dish={Dish} showpopupHandler={showpopupHandler} />;
    }
  });

  const paraStyles = {
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    display: "-webkit-box",
  };

  return (
    <div>
      {showPopUp && (
        <PopUp
          closeShowPopUpHandler={closeShowPopUpHandler}
          currentDish={currentDish}
          allDishes={allMenuDishes}
        />
      )}
      <div className="specialdishes">
        <div className="specialdishes-info">
          <h1>Special Dishes</h1>

          {/* //if read more is false then show less text */}
          <p style={readmore ? null : paraStyles}>
            Succulent grilled lobster tail paired with tender, mouthwatering
            filet mignon, topped with a rich garlic butter sauce. A harmony of
            land and sea flavors that will elevate your dining experience to new
            heights. Indulge in this culinary masterpiece tonight at here!.
          </p>
          <label
            onClick={() => {
              setReadmore(!readmore);
            }}
          >
            {readmore ? "Read Less..." : "Read More..."}
          </label>
        </div>
        <div className="specialdishes-content">
          <ul className="list flex flex-wrap">{Dishes}</ul>
        </div>
      </div>
    </div>
  );
}

export default Specialdishes;
