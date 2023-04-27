import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dog from './components/Dog';
import Cat from "./components/Cat";
import Header from './components/Header';


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
        element: <p>small pets here</p>,
      },
      {
        path: "/Account",
        element: <p>Account here</p>,
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
