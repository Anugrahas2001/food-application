import React,{useState,useEffect}from "react";
import axios from "axios";
import Loader from "./Loader";

//Named export
export const AllMenuContext = React.createContext();

const AllMenu = (props) => {
  let [food, setFood] = useState([]);
  let [loading, setLoading] = useState(false);

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

  useEffect(() => {
    fetchMenuData();
  }, []);

  return (
    <div>
      <AllMenuContext.Provider value={food}>
        {!loading ? props.children : <Loader />}
      </AllMenuContext.Provider>
    </div>
  );
};

export default AllMenu;
