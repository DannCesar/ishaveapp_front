import { Layout } from "../components/Layout";
import { Client } from "../pages/Client";
import { Home } from "../pages/Home";
import { PageNotFound } from "../pages/PageNotFound";
import { Scheduling } from "../pages/Scheduling";
import { Service } from "../pages/Service";


//Rota privada para quando estiver logado

export const privateRoutes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/clientes",
        element: <Client/>
    },
    {
        path: "/servicos",
        element: <Service/>
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
