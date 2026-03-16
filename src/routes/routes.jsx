import { Component } from "react";
import { createBrowserRouter, Route } from "react-router";
import App from "../App";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../pages/Home/Home";



const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        children: [
            { path: "/", element: <Home/> }
        ]



    }

])

export default router