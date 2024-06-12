import React, { useContext } from "react";
import { DispatchContext } from "../context/AppProvider";

const PopUp = (props) => {
  
  const dispatch=useContext(DispatchContext);


  let dishNames=props.allDishes.filter((dish)=>{
    return dish.strMeal === props.currentDish;
  }).map((dishname,index)=>{
    return(
      <div className="popup-menu" key={index}>
          {/* <i
            className="fa-regular fa-circle-xmark icon popup-icon"
            onClick={props.closeShowPopUpHandler}
          ></i> */}
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
        <button className="popbtn" onClick={()=>{dispatch({type:"add_To_cart",payload:{
          title:dishname.strMeal,
          img:dishname.strMealThumb
        }}), props.closeShowPopUpHandler()}}>Order Now</button>
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
