import { Layout } from "../components/Layout";
import { Home } from "../pages/Home";
import { Scheduling } from "../pages/Scheduling";



export const privateRoutes = [
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/agendamento",
        element: <Scheduling/>
    }
]
