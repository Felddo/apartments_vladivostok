import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main } from './components/Main';
import { Apartment } from './components/apartments/Apartment';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
  {
    path: '/kvartiry-posutochno-vladivostok/:slug',
    element: <Apartment />,
  },
]);

export const App = () => {
  return <RouterProvider router={router} />;
};