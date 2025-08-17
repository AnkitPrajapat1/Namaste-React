import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.jsx";
import About from "./componenets/About.jsx";
import ContactUs from "./componenets/ContactUs.jsx";
import Error from "./componenets/Error.jsx";
import Body from "./componenets/Body.jsx";
import RestaurantsMenu from "./componenets/Restaurantsmenu.jsx";
// import{ router }from './App.jsx'

import { createBrowserRouter, RouterProvider } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
        errorElement: <Error />,
      },
      {
        path: "/about",
        element: <About />,
        errorElement: <Error />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
        errorElement: <Error />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantsMenu />,
        errorElement: <Error />,
      },
    ],
    errorElement: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
