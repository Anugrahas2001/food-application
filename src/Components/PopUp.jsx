import React from "react";

const PopUp = (props) => {
  
  let dishNames=props.allDishes.filter((dish)=>{
    return dish.strMeal === props.currentDish;
  }).map((dishname,index)=>{
    return(
      <div className="popup-menu" key={index}>
          <i
            className="fa-regular fa-circle-xmark icon popup-icon"
            onClick={props.closeShowPopUpHandler}
          ></i>
        <div className="popup-menu-content">
          <img key={index} src={dishname.strMealThumb} alt={dishname.strMeal}/>
          <h4 className="popup-menu-content-header">{dishname.strCategory}</h4>
        </div>
        <h2 key={index}>{dishname.strMeal}</h2>
        <ul className="ingredients">
          <li>{dishname.strIngredient1}</li>
          <li>{dishname.strIngredient2}</li>
          <li>{dishname.strIngredient3}</li>
          <li>{dishname.strIngredient4}</li>

        </ul>
        <p className="descpription">{dishname.strInstructions}</p>
        <button className="popbtn" onClick={()=>props.addToCartHandler(dishname.strMealThumb,dishname.strMeal)}>Order Now</button>
      </div>
    )
  }
)

  return (
    <>
      <div className="popup">
        <div className="popup-content">
          {dishNames}
         
        </div>
      </div>
    </>
  );
};

export default PopUp;
