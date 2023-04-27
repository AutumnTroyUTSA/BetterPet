import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dog from './components/Dog';
import Cat from "./components/Cat";
import Header from './components/Header';
import Small_Pet from './components/Small_Pet';
import Login from './components/Login';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "Dog",
        element: <Dog />,
      },
      {
        path: "Cat",
        element: <Cat />,
      },
      {
        path: "/Small_Pet",
        element: <Small_Pet/>,
      },
      {
        path: "/Account",
        element: <Login/>,
      },
      {
        path: "/Cart",
        element: <p>cart here</p>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  
    <RouterProvider router={router} />
  </React.StrictMode>
);
