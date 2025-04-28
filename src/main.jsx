import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
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
import FullDes from './Components/more details/FullDes.jsx';
import Specification from './Components/more details/Specification.jsx';
import Tags from './Components/more details/Tags.jsx';
import Reviews from './Components/more details/Reviews.jsx';
import Checkout from './Pages/Checkout.jsx';
import Email from './Pages/Email.jsx';





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
        path: '/checkout',
        element: <Checkout></Checkout>
      },
      {
        path: '/email',
        element: <Email></Email>
      },
      {
        path: "details",
        element: <Details></Details>,
        children:[
          {
            index: true,
            element: <Navigate to="full-des" />
          },
          {
            path: 'full-des',
            element: <FullDes></FullDes>
          },
          {
            path: 'spec',
            element: <Specification></Specification>
          },
          {
            path: 'tags',
            element: <Tags></Tags>
          },
          {
            path: 'reviews',
            element: <Reviews></Reviews>
          },
          
        ]
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
