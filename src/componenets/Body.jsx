import resList from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard.jsx";
import { useState } from "react";
const Body = () => {
  const [restaurants, setRestaurants] = useState(resList);
  const topRated = resList.filter((res) => res.rating > 4.2);
  return (
    <div className="body">
      <input type="text" placeholder="search" />
      <button
        onClick={() => {
          setRestaurants(topRated);
        }}
      >
        Top Rated Restaurants
      </button>
      <button
        onClick={() => {
          setRestaurants(resList);
        }}
      >
        All Restaurants
      </button>
      <div className="res-container">
        {restaurants.map((restaurent) => (
          <RestaurantCard key={restaurent.id} resList={restaurent} />
        ))}
      </div>
    </div>
  );
};

export default Body;
