import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root.jsx';
import MainLayout from './Layouts/MainLayout.jsx';
import AboutUs from './Pages/AboutUs.jsx';




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Root></Root>
      },
      {
        path: "about-us",
        element: <AboutUs></AboutUs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
