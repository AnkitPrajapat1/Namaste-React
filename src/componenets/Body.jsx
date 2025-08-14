import resList from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard.jsx";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [count,setCount]=useState(0);
  
  // setCount(count + 1)
  const topRated = resList.filter((res) => res.rating > 4.2);
  //api not working
  useEffect(() => {
    // fetchData();
    setRestaurants(resList);
  }, []);
  
  
  // const fetchData=async()=>{
  //  const data=await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?offset=0&is-seo-homepage-enabled=true&lat=23.3362757&lng=75.0400205&carousel=true&third_party_vendor=1")
  //  const json=await data.json();
  //  const result=json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  //  setRestaurants(result)

  // }

  // if(restaurants.length===0){
  //   return <Shimmer/>
  // }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            className="search-input"
            type="text"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value)
              if(e.target.value === '') setRestaurants(resList)
            }}
          />

         
          <button
            className="search-btn"
            onClick={() => {
              setRestaurants(resList);
              console.log(searchText);
              const filteredRes = resList.filter((res) => {
                return res.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              console.log(filteredRes);
              setRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
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
      </div>
      {restaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {restaurants.map((restaurent) => (
            <RestaurantCard key={restaurent.id} resList={restaurent} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
