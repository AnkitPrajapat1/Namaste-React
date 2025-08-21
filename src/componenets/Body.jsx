// import resList from "../utils/mockData.js";
import RestaurantCard from "./RestaurantCard.jsx";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [resList, setRestList] = useState([]);
  const [searchText, setSearchText] = useState("");

  // setCount(count + 1)
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
    setRestList(result);

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
      <div className="flex w-[60%] justify-between m-auto">
        <div className="flex  ">
          <input
            className="bg-gray-300 p-1 m-1 rounded-md"
            type="text"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (e.target.value === "") setRestaurants(resList);
            }}
          />

          <button
            className="bg-orange-400 hover:bg-orange-300 p-1 m-1 rounded-md"
            onClick={() => {
              setRestaurants(resList);
              console.log(searchText);
              const filteredRes = restaurants.filter((res) => {
                return res.info.name
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
            const topRated = restaurants.filter(
              (res) => res?.info?.avgRating > 4.2
            );

            setRestaurants(topRated);
          }}
          className="bg-zinc-500 p-2 m-1 rounded-md hover:text-white hover:bg-zinc-400 hover:cursor-pointer"
        >
          Top Rated Restaurants
        </button>
        <button
          onClick={() => {
            setRestaurants(resList);
          }}
          className="bg-zinc-500 p-2 m-1 rounded-md hover:text-white hover:bg-zinc-400 hover:cursor-pointer"
        >
          All Restaurants
        </button>
      </div>

      {restaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="w-[90%] mt-4 flex flex-wrap gap-5 m-auto">
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
