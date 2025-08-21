
import { IMG_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  // console.log(props)
  const { name, avgRating,costForTwo, cuisines, cloudinaryImageId } = props.resList?.info;
  const {deliveryTime} = props.resList.info.sla;
  const cuisinesList = cuisines.join(", ").substring(0,33)
  
  
  return (
    <div className="w-[250px] h-[300px] hover:border-1 rounded-md p-1 m-auto hover:scale-95 transform transition-transform hover:ease-in-out">
      <img className="h-[60%] w-full rounded-md" src={IMG_URL+cloudinaryImageId} alt="" />
      <h3 className="font-bold ">{name.length>30?cuisinesList.substring(0,30)+"...":name}</h3>
      <p>{avgRating} rating</p>
      <p>{costForTwo}</p>
      <p>{deliveryTime} min</p>
      <p className="font-light">{cuisinesList.length>30?cuisinesList.substring(0,33)+"...":cuisinesList}</p>
    </div>
  );
  // console.log(props)
  // const { name, rating,price,time_to_deliver, cuisines, image_url } = props.resList;
  // const cuisinesList = cuisines.join(", ")
  
  
  // return (
  //   <div className="card-container">
  //     <img src={image_url} alt="" />
  //     <h3>{name}</h3>
  //     <p>{rating} rating</p>
  //     <p>{price}</p>
  //     <p>{time_to_deliver} min</p>
  //     <p>{cuisinesList}</p>
  //   </div>
  // );
};


export default RestaurantCard;