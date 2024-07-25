


import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


import LandingPage from "./Pages/LandingPage/LandingPage";
import Login from "./Pages/Login/Login";
import UserDashboard from "./Pages/User/UserDashboard";





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
    path: "/user",
    element: <UserDashboard/>,
  },

 
 
]);


export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
