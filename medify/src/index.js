import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Search from "./pages/Search/Search";
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/Home/Home";
import Bookings from "./pages/Bookings/Bookings";
import { createTheme, ThemeProvider } from '@mui/material';
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"search",
        element:<Search/>
      },
      {
        path:"bookings",
        element:<Bookings/>
      },
      {
        index:true,
        element:<Home/>
      }
    ]
  }
])
export const theme= createTheme({
  typography:{
    fontFamily :"Poppins,sans-serif",
  },
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
