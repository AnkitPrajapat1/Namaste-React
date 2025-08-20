import resList from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard.jsx";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // setCount(count + 1)
  const topRated = resList.filter((res) => res.rating > 4.2);
  //api not working
  useEffect(() => {
    fetchData();
    // setRestaurants(resList);
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const result =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurants(result);
  };

  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false)
    return (
      <h1>Look's like you are offline. Check your internet connection!</h1>
    );

  if (restaurants.length === 0) {
    return <Shimmer />;
  }
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
              setSearchText(e.target.value);
              if (e.target.value === "") setRestaurants(resList);
            }}
          />

          <button
            className="search-btn"
            onClick={() => {
              setRestaurants(resList);
              // console.log(searchText);
              const filteredRes = resList.filter((res) => {
                return res.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              // console.log(filteredRes);
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
            <Link
              to={`/restaurants/${restaurent.info.id}`}
              key={restaurent.info.id}
            >
              {" "}
              <RestaurantCard resList={restaurent} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
