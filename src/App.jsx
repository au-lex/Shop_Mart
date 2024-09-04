import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Login from "./Pages/Login/Login";
import UserDashboard from "./Pages/User/UserDashboard";
import Signup from "./Pages/Signup/Signup";
import ForgotPassword from "./Pages/Login/ForgotPsw";
import Cart from "./Pages/Cart/Cart";
import Orders from "./Pages/Orders/Orders";
import Saved from "./Pages/Saved/Saved";
import Setting from "./Pages/Settings/Setting";

import Footer from "./Componet/Footer";
import UserHeader from "./Pages/User/UserHeader";
import Loader from "./Componet/Loader";
import Product_details from "./Reusable/Product_details";


const Layout = () => {
  return (
    <>
    {/* <Loader /> */}
      <UserHeader />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <UserDashboard />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/saved",
        element: <Saved />,
      },
      {
        path: "/settings",
        element: <Setting />,
      },

      {
        path: "/details/:id",
        element: <Product_details />,
      },
        
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/forgotpsw",
    element: <ForgotPassword />,
  },
  {
    path: "/signup",
    element: <Signup />,
  }, 
  

]);

export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}