import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Roots from "../components/Roots/Roots";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Brands from "../components/Brands/Brands";
import MyProfile from "../components/MyProfile/MyProfile";
import AboutDev from "../components/AboutDev/AboutDev";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/brands",
                element: <Brands></Brands>,
            },
            {
                path: "/my-profile",
                element: <MyProfile></MyProfile>,
            },
            {
                path: "/about-dev",
                element: <AboutDev></AboutDev>,
            },
        ],
    },
    {
        path: "/sign-up",
        element: <SignUp></SignUp>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
]);

export default Router;