import React from 'react';
// import { Counter } from './features/counter/Counter';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';
import Home from './pages/Home';
import CartPage from './pages/CartPage';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import CheckoutPage from './pages/CheckoutPage';
import ProductDetailsPage from './pages/ProductDetailsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Home></Home>
    ),
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/signup",
    element: <Signup></Signup>,
  },
  { //only for now (testing) later page will be added
    path: "/cart",
    element: <CartPage></CartPage>
  },
  {
    path:"/checkout",
    element:<CheckoutPage></CheckoutPage>
  }, 
  {
    path:"/product-details", 
    element:<ProductDetailsPage></ProductDetailsPage>
  }
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
