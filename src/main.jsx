import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import Banner from './Components/Banner/Banner.jsx';
import Products from './Components/Products/Products.jsx'
import All from './Components/All/All.jsx'
import Laptops from './Components/Laptops/Laptops.jsx';
import Phones from './Components/Phones/Phones.jsx';
import Accessories from './Components/Accessories/Accessories.jsx'
import Watches from './Components/Watches/Watches.jsx'
import Macs from './Components/Macs/Macs.jsx'
import Iphones from './Components/Iphones/Iphones.jsx'
import Details from './Components/Details/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path: '/',
        element:<Banner></Banner>,
        children:[
          {
            path:'/',
            element:<Products></Products>,
            children:[
              {
                path:'/',
                loader: ()=>fetch('../public/Product.json'),
                element:<All></All>
              },
              {
                path:'/laptops',
                loader: ()=>fetch('../public/Product.json'),
                element:<Laptops></Laptops>
              },
              {
                path:'/phones',
                loader: ()=>fetch('../public/Product.json'),
                element:<Phones></Phones>
              },
              {
                path:'/accessories',
                loader: ()=>fetch('../public/Product.json'),
                element:<Accessories></Accessories>
              },
              {
                path:'/watches',
                loader: ()=>fetch('../public/Product.json'),
                element:<Watches></Watches>
              },
              {
                path:'/macs',
                loader: ()=>fetch('../public/Product.json'),
                element:<Macs></Macs>
              },
              {
                path:'/iphones',
                loader: ()=>fetch('../public/Product.json'),
                element:<Iphones></Iphones>
              }
            ]
          }
        ]
      },
      {
        path: '/details/:product_id',
        loader: ()=>fetch('../public/Product.json'),
        element: <Details></Details>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
