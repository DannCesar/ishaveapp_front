import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { publicRoutes } from "./public.routes"
import { privateRoutes } from "./private.routes";

//Criação do index para rotas e condição ternária para identificar qual rota exibir

export const Routes = () => {
    const idSession = localStorage.getItem("ishaveappId")
    console.log("id",idSession)
    return(
        <RouterProvider router={createBrowserRouter(idSession?privateRoutes:publicRoutes)}/>
    );
};