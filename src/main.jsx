import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements
} from 'react-router-dom';
import HomePage from './pages/home/HomePage.jsx'
import ContactPage from './pages/contact/Contact.jsx'
import DelieveryPage from './pages/delievery/Delievery.jsx'
import MenuItemPage from './pages/menuItem/MenuItem.jsx'

import './styles/global.scss';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/delievery" element={<DelieveryPage />} />
      <Route path="/:menuItem" element={<MenuItemPage />} />
    </>
  ),
  // {
  //   basename: '/Victoria'
  // }
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
