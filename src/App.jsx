import { createBrowserRouter, RouterProvider } from "react-router";
import "./App.css";

import Applayout from "./componenets/Applayout";
import Protectroute from "./componenets/Protectroute";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Details from "./pages/Details";

import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Protectroute />,
      children: [
        {
          element: <Applayout />,
          children: [
            { path: "/", element: <Home /> },
            { path: "/shop", element: <Shop /> },
            { path: "/contact", element: <Contact /> },
            { path: "/details/:id", element: <Details /> },
          ],
        },
      ],
    },

    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
