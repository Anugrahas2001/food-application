// import React,{useState} from 'react'
// import PopUp from './PopUp';
// import Card from './Card';

// const ShowPopUp = (props) => {
//     let [showPopUp, setShowPopUp] = useState(false);
//   let [currentDish, setCurrentDish] = useState(" ");

//     const showpopupHandler=(dishName)=> {
//         setCurrentDish(dishName);
//         setShowPopUp(true);
//       };
    
//       const closeShowPopUpHandler = () => {
//         setShowPopUp(false);
//     };
//     <Card showpopupHandler={showpopupHandler} />
//   return (
//     <div>
//         {showPopUp &&<PopUp closeShowPopUpHandler={closeShowPopUpHandler}
//         currentDish={currentDish}
//         allDishes={props.allMenu}/>}
//     </div>
//   )
// }

// export default ShowPopUp
