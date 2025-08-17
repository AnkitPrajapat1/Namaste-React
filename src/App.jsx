import { useState } from "react";
import "./App.css";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import Header from "./componenets/Header.jsx";
// import Body from "./componenets/Body.jsx";
// import About from "./componenets/About.jsx";
// import ContactUs from "./componenets/ContactUs.jsx";
// import Error from "./componenets/Error.jsx";


function App() {
  return (
    <>
      <Header />
      {/* <Body /> */}
      <Outlet/>
    </>
  );
}


export default App;
