import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { publicRoutes } from "./public.routes"


export const Routes = () => {
    return(
        <RouterProvider router={createBrowserRouter(publicRoutes)}/>
    );
};