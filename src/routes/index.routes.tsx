import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { publicRoutes } from "./public.routes"
import { privateRoutes } from "./private.routes";


export const Routes = () => {
    return(
        <RouterProvider router={createBrowserRouter(publicRoutes && privateRoutes)}/>
    );
};