import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contect from './pages/Contect';
import Shop from './pages/Shop';
import Applayout from './componenets/Applayout';
import Login from './pages/Login';
import Register from './pages/Register';
import Protectroute from './componenets/Protectroute';

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
            path: "/about",
            element: <About />
          },
          {
            path: "/contect",
            element: <Contect />
          },
          {
            path: "/shop",
            element: <Shop />
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
