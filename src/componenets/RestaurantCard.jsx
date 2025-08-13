const RestaurantCard = (props) => {
  const {price, name, rating, cuisines, time_to_deliver, image_url } = props.resList;
  const cuisinesList = cuisines.join(", ")
  console.log(name);
  console.log(rating);
  
  return (
    <div className="card-container">
      <img src={image_url} alt="" />
      <h3>{name}</h3>
      <p>{rating} rating</p>
      <p>{price} rupees</p>
      <p>{time_to_deliver} min</p>
      <p>{cuisinesList}</p>
    </div>
  );
};


export default RestaurantCard;