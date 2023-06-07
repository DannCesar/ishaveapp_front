import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { publicRoutes } from "./public.routes"
import { privateRoutes } from "./private.routes";


export const Routes = () => {
    const idSession = localStorage.getItem("ishaveappId")
    return(
        <RouterProvider router={createBrowserRouter(idSession?privateRoutes:publicRoutes)}/>
    );
};