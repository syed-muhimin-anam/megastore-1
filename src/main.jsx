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
import GiftCards from './Pages/GIftCards.jsx';
import Gcards1 from './Components/gift cards page/gcards1.jsx';
import ContactUs from './Pages/ContactUs.jsx';
import Details from './Pages/Details.jsx';





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
      },
      {
        path: "contact-us",
        element: <ContactUs></ContactUs>
      },
      {
        path: "details",
        element: <Details></Details>
      },
      {
        path: "gift-cards",
        element: <GiftCards></GiftCards>,
        children: [
         { path: "",
          element: <Gcards1></Gcards1>}
        ]
      },

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
