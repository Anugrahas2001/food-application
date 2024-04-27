import React from 'react'

const Card = (props) => {

  return (
    
      <li key={props.Dish.idMeal} className='card-list'>
          <a href="JavaScript:" onClick={()=>{props.showpopupHandler(props.Dish.strMeal)}}>
          <img src={props.Dish.strMealThumb} alt={props.Dish.strMeal} />
          </a>
          <h5>{props.Dish.strMeal}</h5>
        </li>

  )
}

export default Card
