import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
const RestaurantsMenu = (props) => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    // console.log(json.data);
    setResInfo(json.data);
};


    if(resInfo===null) return <Shimmer/>
  const{name,cuisines,city,avgRating,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info
 const cuisinesList=cuisines.join(", ")
  return(
    <div className="card">
        <div className="left">
      {/* Restaurant Name */}
      <h2 className="restaurant-name">{name}</h2>

      {/* Rating and Price */}
      <div className="rating-price">
        <span className="rating">⭐{avgRating}</span>
        <span className="dot">•</span>
        <span>{costForTwoMessage}</span>
      </div>

      {/* Categories */}
      <div className="categories">
       
        {/* <span className="category">Pizzas</span>,{" "}
        <span className="category">Italian</span> */}
        {cuisinesList}
      </div>

      {/* Outlet & Delivery Time */}
      <div className="outlet-info">
        <div className="outlet-row">
          <div className="line"></div>
          <span className="outlet-label">Outlet</span>
          <span className="outlet-location">{city} Locality</span>
        </div>
        <div className="outlet-row">
          <div className="line"></div>
          <span>20–25 mins</span>
        </div>
      </div>
      </div>
      <button className="order-btn">Order Now</button>
    </div>
  );
};

export default RestaurantsMenu;
