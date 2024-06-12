import React, { createContext, useReducer } from 'react'

const DispatchContext=createContext();
const StateContext=createContext();
const AppProvider = ({children}) => {

   const initialState={
    cart:[]
   }
   
   const reducer = (state, action) => {
    console.log(state);
    switch (action.type) {
      case "add_To_cart":
        return {
          ...state,
          cart: [...state.cart, { title: action.payload.title, img: action.payload.img }]
        };
      case "remove_From_cart":
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