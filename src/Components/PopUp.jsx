import React from "react";

const PopUp = (props) => {
  

  
  let dishNames=props.allDishes.filter((dish)=>{
    return dish.strMeal === props.currentDish;
  }).map((dishname,index)=>{
    return(
      <div className="popup-menu">
        <div className="popup-menu-content">
          <img key={index} src={dishname.strMealThumb} alt={dishname.strMeal}/>
          <h4 className="popup-menu-content-header">{dishname.strCategory}</h4>
        </div>
        <h4 key={index}>{dishname.strMeal}</h4>
      </div>
    )
  }
)

  return (
    <>
      <div className="popup">
      <h4 className="close" onClick={props.closeShowPopUpHandler}>Close</h4>
        <div className="popup-content">
          {dishNames}
          <button className="popbtn">Order Now</button>
        </div>
      </div>
    </>
  );
};

export default PopUp;
