


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import LandingPage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Login/Login";
import UserDashboard from "./Pages/User/UserDashboard";
import Signup from "./Pages/Signup/Signup";
import ForgotPassword from "./Pages/Login/ForgotPsw";
import Cart from "./Pages/Cart/Cart";





const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/forgotpsw",
    element: <ForgotPassword/>,
  },
  {
    path: "/signup",
    element: <Signup/>,
  },
  {
    path: "/user",
    element: <UserDashboard/>,
  },
  {
    path: "/cart",
    element: <Cart/>,
  },

 
 
]);


export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
