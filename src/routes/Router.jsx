import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Roots from "../components/Roots/Roots";
import SignUp from "../components/SignUp/SignUp";
import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Brands from "../components/Brands/Brands";
import MyProfile from "../components/MyProfile/MyProfile";
import AboutDev from "../components/AboutDev/AboutDev";
import ExpectedBrand from "../components/ExpectedBrand/ExpectedBrand";
import ForgetPassword from "../components/ForgetPassword/ForgetPassword";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        errorElement: <ErrorPage></ErrorPage>,
        loader: () => fetch('/brands.json'),
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
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>,
            },
            {
                path: "/about-dev",
                element: <AboutDev></AboutDev>,
            },
            {
                path: "/brand/:id",
                element: <PrivateRoute>
                    <ExpectedBrand></ExpectedBrand>
                </PrivateRoute>, 
                loader: ({ params }) => fetch('/brands.json')
                .then(res => res.json())
                .then(brands => brands.find(brand => brand._id === params.id))
            },
            {
                path: "/sign-up",
                element: <SignUp></SignUp>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/forget-password",
                element: <ForgetPassword></ForgetPassword>,
            },
        ],
    },
]);

export default Router;