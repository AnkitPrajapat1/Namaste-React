import { useState } from "react";
import "./App.css";
import data from "./assets/res.json";

const Header = () => {
  return (
    <div className="header">
      <img
        src="https://media.istockphoto.com/id/1435983029/vector/food-delivery-logo-images.jpg?s=612x612&w=0&k=20&c=HXPxcjOxUiW4pMW1u9E0k2dJYQOU37a_0qZAy3so8fY="
        alt=""
      />
      <ul className="nav-items">
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

console.log(data)
const RestaurentCard = (props) => {
  const { name, rating, cusins, time, img } = props.resList;
  console.log(name);
  console.log(rating);
  return (
    <div className="card-container">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{rating} rating</p>
      <p>{time} min</p>
      <p>{cusins}</p>
    </div>
  );
};
const Body = () => {
  return (
    <div className="body">
      <input type="text" placeholder="search" />
      <div className="res-container">
        {data.map((restaurent) => (
          <RestaurentCard key={restaurent.id} resList={restaurent} />
        ))}
      </div>
    </div>
  );
};
function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
