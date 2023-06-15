import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";
import { Scheduling } from "../pages/Scheduling";

//Rota privada para quando estiver logado

export const privateRoutes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/agendamento",
        element: <Scheduling/>
    },
    {
        path:"*",
        element: <PageNotFound/>
    },
]
