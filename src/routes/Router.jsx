import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <h1>just starting</h1>,
    },
    {
        path: "/brands",
        element: <h1>Brands</h1>,
    },
    {
        path: "/my-profile",
        element: <h1>my-profile</h1>,
    }
]);

export default Router;