import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Scheduling } from "../pages/Scheduling";
import { RegisterClient } from "../pages/Scheduling/RegisterClient";




export const privateRoutes = [
    {
        path: "/login",
        element: <Home/>
    },
    {
        path: "/registro-do-cliente",
        element: <RegisterClient/>
    },
    {
        path: "/agendamento",
        element: <Scheduling/>
    }
]
