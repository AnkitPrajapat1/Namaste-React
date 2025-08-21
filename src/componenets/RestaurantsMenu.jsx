import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantsMenu = (props) => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;
  const { name, cuisines, city, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const cuisinesList = cuisines.join(", ");
  return (
    <div className="w-[80%] m-auto  mt-30 ">
      {/* Restaurant Name */}
      <div className="font-extrabold text-3xl -mt-20">
        <h2>{name}</h2>
      </div>
      <div className="border-1 border-gray-400 p-4 mt-5 rounded-2xl shadow-2xl flex justify-between items-center ">
        <div>
          {/* Rating and Price */}
          <div className="flex gap-2.5">
            <span className="font-bold">⭐{avgRating}</span>
            <span className="dot">•</span>
            <span className="font-bold">{costForTwoMessage}</span>
          </div>

          {/* Categories */}
          <div className="text-red-700 underline font-[600]">
            {/* <span className="category">Pizzas</span>,{" "}
        <span className="category">Italian</span> */}
            {cuisinesList}
          </div>

          {/* Outlet & Delivery Time */}
          <div className="outlet-info">
            <div className="flex gap-3 items-center ">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <span className="">Outlet</span>
              <span className="font-light">{city} Locality</span>
            </div>
            <div className="flex gap-3 items-center ">
              <div className="w-1 h-1 bg-black rounded-full"></div>
              <span>20–25 mins</span>
            </div>
          </div>
        </div>
        <button className="bg-orange-600 hover:bg-orange-400 hover:cursor-pointer h-[50px] w-[100px] rounded-lg">
          Order Now
        </button>
      </div>
    </div>
  );
};

export default RestaurantsMenu;
