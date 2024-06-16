import React, { createContext, useReducer } from 'react'

const DispatchContext=createContext();
const StateContext=createContext();
const AppProvider = ({children}) => {

   const initialState={
    cart: JSON.parse(localStorage.getItem('cart')) || []
   }
   
   const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
      case "add_To_cart":
        localStorage.setItem('cart', JSON.stringify([...state.cart, { title: action.payload.title, img: action.payload.img }]));
        return {
          ...state,
          cart: [...state.cart, { title: action.payload.title, img: action.payload.img }]
        };
      case "remove_From_cart":
        localStorage.setItem('cart', JSON.stringify(state.cart.filter(item => item.title !== action.payload)));
        return {
          ...state,
          cart: state.cart.filter(item => item.title !== action.payload)
        };
      default:
        return state;
    }
  };

   let [state,dispatch]=useReducer(reducer,initialState);
   
  return (
    <div>
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    </div>
  )
}

export { AppProvider, DispatchContext, StateContext };
