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
// import Grosery from "./componenets/Grocery.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";
const Grocery = lazy(() => import("./componenets/Grocery.jsx"));
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
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
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
