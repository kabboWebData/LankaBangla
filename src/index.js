import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import MainPage from './component/Mainpage/MainPage';
import Testing from './component/Mainpage/Testing';
import CustomerDashbord from './component/Dashbord/CustomerDashbord';
import CustomerManager from './component/Dashbord/CustomerManager';
import Headofsatlement from './component/Dashbord/Headofsatlement';
import CustomerFrom from './component/CustomerForm/CustomerFrom';
import CAccountnfo from './component/CustomerForm/CAccountnfo';
import CAccountForm from './component/CustomerForm/CAccountForm';
import CustomerCreateAcount from './component/CustomerForm/CustomerCreateAcount';
import Loginpage from './component/Mainpage/Loginpage';
import Adminstation from './component/Administration/Adminstation';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Loginpage></Loginpage>
  },
  {
    path: "/caform",
    element: <CAccountnfo></CAccountnfo>,
  },

  {
    path: "/main",
    element: <MainPage></MainPage>,
    children: [
      {
        path: "testing",
        element: <Testing></Testing>,
        

      },
      {
        path: "admin",
        element: <Adminstation></Adminstation>,
        

      },
      {
        path: "cDashbord",
        element: <CustomerDashbord></CustomerDashbord>,

      },
      {
        path: "cmDashbord",
        element: <CustomerManager />

      },
      {
        path: "shead",
        element: <Headofsatlement />

      },
      {
        path: "cform",
        element: <CustomerFrom></CustomerFrom>

      },
      {
        path: "cainfo",
        element: <CAccountnfo></CAccountnfo>

      },
      {
        path: "cAform",
        element: <CAccountForm></CAccountForm>

      },
      {
        path: "createAc",
        element: <CustomerCreateAcount></CustomerCreateAcount>

      },
    ]
  },


]);





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);









// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
