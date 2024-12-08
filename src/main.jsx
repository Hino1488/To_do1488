import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { VtoroiSt } from './Components/VtoroiSt/VtoroiSt';
import { PervSt } from './Components/PervSt/PervSt';
import { CounterProvider } from './Components/CounterContext/CounterContext'
import { TretiySt } from './Components/TretiySt/TretiySt';
import { Layout } from './Components/Layout/Layout';
import AuthProvider from './Components/AuthProvider/AuthProvider'
import PrivateRoute from './Components/PrivateRout/PrivateRout';
import { Product } from './Components/Product/Product';
const router = createBrowserRouter([
  {

    path: "/",

    element: <Layout> <PervSt /> </Layout>
  },
  {
    path: "/login",
    element: <Layout> <VtoroiSt /> </Layout>
  },
  {
    path: "/sigma",
    element: <PrivateRoute> <Layout> <TretiySt /> </Layout> </PrivateRoute>
  },
  {
    path: "/sigma/:name",
    element: <PrivateRoute> <Layout> <Product/> </Layout> </PrivateRoute>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <CounterProvider><RouterProvider router={router} /></CounterProvider></AuthProvider>
  </StrictMode>,
)
