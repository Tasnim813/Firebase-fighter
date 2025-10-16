import { Component } from "react";
import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Homepage from "../Pages/Homepage";
import AboutUs from "../Pages/AboutUs";
import Profile from "../Pages/Profile";
import Signup from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";

export const router=createBrowserRouter([
    {
        path:'/',
        Component:MainLayout,
        children:[
            {
                path:'/',
                index:true,
                Component:Homepage
            },{
                path:'/Aboutus',
                Component:AboutUs
            },{
                path:'/profile',
                Component:Profile
            },
            {
                path:'/Signup',
                Component:Signup
            },
            {
                path:'/signin',
                Component:SignIn
            }
        ]
    }
])