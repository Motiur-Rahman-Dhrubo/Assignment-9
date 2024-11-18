import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <h1>just starting</h1>,
        errorElement: <ErrorPage></ErrorPage>
    },
    {
        path: "/brands",
        element: <h1>Brands</h1>,
    },
]);

export default Router;