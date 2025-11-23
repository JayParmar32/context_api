import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Home from './pages/Home';
import Contact from './pages/Contact';
import Shop from './pages/Shop';
import Applayout from './componenets/Applayout';
import Login from './pages/Login';
import Register from './pages/Register';
import Protectroute from './componenets/Protectroute';
import Details from './pages/Details';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Protectroute />,
      children: [{
        path: "/",
        element: <Applayout />,
        children: [
          {
            path: "/",
            element: <Home />
          },
          
          {
            path: "/contact",
            element: <Contact />
          },
          {
            path: "/shop",
            element: <Shop />
          },{
            path: "/details/:id",
            element: <Details/>
          }
        ]
      },]
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
